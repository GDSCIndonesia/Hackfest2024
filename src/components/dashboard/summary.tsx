import { Phase, TeamData, getUsersByTeamId } from "@/lib/firestore";
import individualStyle from "./css/individual.module.css";
import DropdownContent from "./elements/dropdown-content";
import YoutubeEmbed from "./elements/youtube-embed";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/date-util";
import { Member } from "@/lib/firestore";
import "./css/individual.module.css";

export default function Summary(teamData: TeamData, teamMembers: Member[]) {
	const [phaseOne, setPhaseOne] = useState<Phase>(teamData.phase_1 as Phase);
	useEffect(() => {
		setPhaseOne(teamData.phase_1 as Phase);
	});

	return (
		<div className={individualStyle.container} style={{ color: "white" }}>
			<div className="chaCode">
				<h1 className="nico">Chapter-Code - Matana University</h1>
			</div>
			<div className="summaryGrid">
				{/* Bisa dibuat pakai card */}
				{teamMembers.map((e) => (
					<div className="summaryCol" key={e.name}>
						<h6>{e.role}</h6>
						<h1>{e.name}</h1>
						<h2>{e.email}</h2>
					</div>
				))}
			</div>

			<div className="sumIdea">
				<h1>Submitted Idea description</h1>
				<p>This is description of the team</p>
			</div>

			<DropdownContent title={"Phase 1 Submission"}>
				{/* Masing-masing ini bisa dibuat component tersendiri */}
				<div className="roleSpan">
					<h1>Hustler: </h1>
					<div>
						{/* Bisa masukin svg bulet biru atau merah */}
						{phaseOne?.link_hustler?.submissionDate ? (
							<span className="statPas">
								Submitted at{" "}
								{formatDate(phaseOne.link_hustler.submissionDate.toDate())}
							</span>
						) : (
							<span className="statNot">Not yet Submitted</span>
						)}
					</div>
				</div>
				<div className="roleSpan">
					<h1>Hacker: </h1>
					<div>
						{/* Bisa masukin svg bulet biru atau merah */}
						{phaseOne?.link_hacker?.submissionDate ? (
							<span className="statPas">
								Submitted at{" "}
								{formatDate(phaseOne.link_hustler.submissionDate.toDate())}
							</span>
						) : (
							<span className="statNot">Not yet Submitted</span>
						)}
					</div>
				</div>
				<div className="roleSpan">
					<h1>Hipster: </h1>
					<div>
						{/* Bisa masukin svg bulet biru atau merah */}
						{phaseOne?.link_hipster?.submissionDate ? (
							<span className="statPas">
								Submitted at{" "}
								{formatDate(phaseOne.link_hustler.submissionDate.toDate())}
							</span>
						) : (
							<span className="statNot">Not yet Submitted</span>
						)}
					</div>
				</div>
			</DropdownContent>

			<DropdownContent title={"A Youtube Video"}>
				<YoutubeEmbed
					title="A youtube video"
					url="https://www.youtube.com/embed/nuML9SmdbJ4?si=AY58iBDikM-069CM"
				/>
			</DropdownContent>
		</div>
	);
}
