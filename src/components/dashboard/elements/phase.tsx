import {
	Phase,
	Submission,
	TeamData,
	getTeamByTeamId,
	updateLink,
} from "@/lib/firestore";
import ProgressBar from "../svg/progress-bar";
import style from "./phase.module.css";
import { useState } from "react";
import { formatDate } from "@/lib/date-util";

export default function Phase({
	desc,
	deadline,
	title,
	stage,
	role,
	teamData,
}: {
	desc: string;
	deadline: string;
	title: string;
	stage: string;
	role: "hipster" | "hacker" | "hustler";
	teamData: TeamData;
}) {
	const phaseData = (teamData["phase_" + stage] ?? {}) as Phase;
	const submission = (phaseData ? phaseData["link_" + role] : {}) as Submission;
	const [link, setLink] = useState(submission?.link || "");

	async function submit() {
		await updateLink({
			teamId: teamData.name,
			link,
			phase: "phase_" + stage,
			role,
		});
	}

	return (
		<section className={style.section}>
			<div>
				<ProgressBar
					finished={submission?.submissionDate ? true : false}
				></ProgressBar>
			</div>
			<div className={style.phase}>
				<div className={style.description}>
					<h1>{title}</h1>
					<p className={style.stage}>Stage {stage}</p>
					<p className={style.desc}>{desc}</p>
				</div>

				<div className={style.submission}>
					<input
						type="url"
						className={style.input}
						onChange={(e) => setLink(e.target.value)}
						value={link}
						placeholder="https://example.com/path/to/file"
					/>
					<div className={style.action}>
						{submission?.submissionDate ? (
							<p className={style.submissionDate}>
								Submited at: {formatDate(submission.submissionDate.toDate())}
							</p>
						) : (
							<p></p>
						)}
						<div className={style.buttons}>
							{submission?.link ? (
								<button
									className={style.edit}
									onClick={async () => await submit()}
								>
									Edit
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
					</div>
				</div>
			</div>
		</section>
	);
}
