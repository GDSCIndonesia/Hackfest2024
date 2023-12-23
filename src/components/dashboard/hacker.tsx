import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";
import { TeamData } from "@/lib/firestore";

export default function Hacker(teamData: TeamData, role: string) {
	const canSubmit = role === "Hacker";
	return (
		<div className={individualStyle.container}>
			<div>
				<Phase
					canSubmit={canSubmit}
					key="hacker_1"
					title="Use Case & Sequence Diagram"
					desc={
						<>
							<p>Greetings, Master Hackers!</p>

							<p>
								We welcome you to the ultimate Hackers Challenge where your
								skills will be put to the test. In this clandestine mission, you
								are required to create both a <strong>Use Case Diagram</strong>{" "}
								and a <strong>Sequence Diagram</strong> for the solution that
								your team is building. Your objective is to unravel the
								intricacies of the system&apos;s functionality and expose its
								hidden features.
							</p>

							<h2>Submission Guidelines:</h2>

							<p>
								<strong>Single Link:</strong> Please ensure that your submission
								is a single link leading directly to your Use Case Diagram and
								Sequence Diagram. We value your time, and this streamlined
								approach will allow us to focus on your innovation.
							</p>

							<p>
								We suggest you to submit your file in a single .zip file. If you
								use a cloud platform like Draw.io, you can export or download
								your creation and zip it all into a single file.
							</p>

							<p>
								<strong>Submission Deadline:</strong> 02 January 2024
							</p>

							<h2>How to Submit:</h2>

							<ol>
								<li>
									Share the link to your diagrams with us via the submission
									link input form.
								</li>
							</ol>
						</>
					}
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hacker"
				></Phase>
			</div>
		</div>
	);
}
