import { Phase, Submission, TeamData, updateLink } from "@/lib/firestore";
import ProgressBar from "../svg/progress-bar";
import style from "./phase.module.css";
import { ReactElement, useState } from "react";
import { formatDate } from "@/lib/date-util";
import { toast } from "react-toastify";

export default function Phase({
	desc,
	deadline,
	title,
	stage,
	role,
	teamData,
	canSubmit,
	onSubmit,
}: {
	desc: ReactElement;
	deadline: string;
	title: string;
	stage: string;
	role: "hipster" | "hacker" | "hustler";
	teamData: TeamData;
	canSubmit: boolean;
	onSubmit: () => Promise<any>;
}) {
	const phaseData = (teamData["phase_" + stage] ?? {}) as Phase;
	const submission = (phaseData ? phaseData["link_" + role] : {}) as Submission;
	const [link, setLink] = useState(submission?.link || "");

	function submit(): Promise<any> {
		const urlRegex =
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

		if (!urlRegex.test(link)) {
			toast.error("Please submit a valid URL link", {
				autoClose: 3000,
				position: "top-right",
				closeOnClick: true,
				theme: "dark",
			});

			return Promise.resolve();
		}
		const promise = updateLink({
			teamId: teamData.name,
			link,
			phase: "phase_" + stage,
			role,
		}).then(onSubmit);

		toast.promise(
			promise,
			{
				pending: "Submmitting...",
				success: "Successfully submitted link",
				error: "Failed to submit, please try again or contact comittee",
			},
			{
				autoClose: 3000,
				position: "top-right",
				closeOnClick: true,
				theme: "dark",
				progressClassName: "bg-hackBlue",
			}
		);

		return promise;
	}

	return (
		<section className={style.section}>
			<div style={{ minHeight: "100%" }}>
				<ProgressBar
					finished={submission?.submissionDate ? true : false}
				></ProgressBar>
			</div>
			<div className={style.phase}>
				<div className={style.description}>
					<h1>{title}</h1>
					<p className={style.stage}>Stage {stage}</p>
					<div className={style.desc}>{desc}</div>
				</div>

				<div className={style.submission}>
					<input
						type="url"
						className={style.input}
						onChange={(e) => setLink(e.target.value)}
						value={link}
						placeholder="https://example.com/path/to/file"
						readOnly={!canSubmit}
					/>
					<div className={style.action}>
						{submission?.submissionDate ? (
							<p className={style.submissionDate}>
								Submited at: {formatDate(submission.submissionDate.toDate())}
							</p>
						) : (
							<p></p>
						)}
						{canSubmit ? (
							<div className={style.buttons}>
								{submission?.link ? (
									<button
										className={style.edit}
										onClick={async () => await submit()}
									>
										Edit & Submit
									</button>
								) : (
									<button
										className={style.submit}
										onClick={async () => await submit()}
									>
										Submit
									</button>
								)}
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
