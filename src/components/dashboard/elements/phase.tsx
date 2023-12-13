import ProgressBar from "../svg/progress-bar";
import style from "./phase.module.css";

export default function Phase({
	desc,
	deadline,
	title,
	stage,
	submission,
}: {
	desc: string;
	deadline: string;
	title: string;
	stage: string;
	submission?: {
		link: string;
		submissionDate: string;
	};
}) {
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
						value={submission?.link ? submission.link : ""}
						placeholder="https://example.com/path/to/file"
					/>
					<div className={style.action}>
						{submission ? (
							<p className={style.submissionDate}>
								Submited at: {submission.submissionDate}
							</p>
						) : (
							<p></p>
						)}
						<div className={style.buttons}>
							{submission ? (
								<button className={style.edit}>Edit</button>
							) : (
								<button className={style.submit}>Submit</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
