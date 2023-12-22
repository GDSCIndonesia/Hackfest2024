import { useEffect } from "react";
import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";

export default function Hipster(teamData: any) {
	return (
		<div className={individualStyle.container}>
			<div>
				<Phase
					key="hipster_1"
					title="User Persona & Wireframe"
					desc={
						<>
							<p>Greetings, Hipster Creatives!</p>

							<p>
								Welcome to the Hipster Design Challenge, where your unique flair
								and design sensibilities will shine. Your mission, should you
								choose to accept it, involves creating a User Persona and a
								Wireframe for an ultra-hip and cutting-edge user experience.
							</p>

							<h2>Submission Guidelines:</h2>

							<p>
								<strong>Single Link:</strong> Please ensure that your submission
								is a single link leading directly to your User Persona and
								Wireframes. We value your time, and this streamlined approach
								will allow us to focus on your innovation.
							</p>

							<p>
								We suggest you to submit your file in a single .zip file. If you
								use a cloud platform like Figma, you can export or download your
								creation and zip it all into a single file.
							</p>

							<p>
								<strong>Submission Deadline:</strong> 02 January 2024
							</p>

							<h2>How to Submit:</h2>

							<ol>
								<li>
									Share the link to your files with us via the submission link
									input form.
								</li>
							</ol>
						</>
					}
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hipster"
				></Phase>
			</div>
		</div>
	);
}
