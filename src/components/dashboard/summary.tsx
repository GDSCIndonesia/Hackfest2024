import { Phase, TeamData, getUsersByTeamId } from "@/lib/firestore";
import individualStyle from "./css/individual.module.css";
import DropdownContent from "./elements/dropdown-content";
import YoutubeEmbed from "./elements/youtube-embed";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/date-util";
import { Member } from "@/lib/firestore";

export default function Summary(teamData: TeamData, teamMembers: Member[]) {
	const [phaseOne, setPhaseOne] = useState<Phase>(teamData.phase_1 as Phase);
	useEffect(() => {
		setPhaseOne(teamData.phase_1 as Phase);
	});

	return (
		<div className={individualStyle.container} style={{ color: "white" }}>
			<div>
				<h1>{"{Chapter code} - {Chapter name}"}</h1>
			</div>
			<div>
				{/* Bisa dibuat pakai card */}
				{teamMembers.map((e) => (
					<>
						<h1>{e.name}</h1>
						<h1>{e.role}</h1>
						<h1>{e.email}</h1>
					</>
				))}
			</div>

			<div>
				<h1>Submitted Idea description</h1>
				<p>This is description of the team</p>
			</div>

			<DropdownContent title={"A Youtube Video"}>
				<YoutubeEmbed
					title="A youtube video"
					url="https://www.youtube.com/embed/nuML9SmdbJ4?si=AY58iBDikM-069CM"
				/>
			</DropdownContent>

			<DropdownContent title={"Phase 1 Submission"}>
				{/* Masing-masing ini bisa dibuat component tersendiri */}
				<div className="text-white">
					<h1>Hustler: </h1>
					<div>
						{/* Bisa masukin svg bulet biru atau merah */}
						{phaseOne?.link_hustler?.submissionDate ? (
							<>
								Submitted at{" "}
								{formatDate(phaseOne.link_hustler.submissionDate.toDate())}
							</>
						) : (
							<>Not yet Submitted</>
						)}
					</div>
				</div>
				<div className="text-white">
					<h1>Hacker: </h1>
					<div>
						{/* Bisa masukin svg bulet biru atau merah */}
						{phaseOne?.link_hacker?.submissionDate ? (
							<>
								Submitted at{" "}
								{formatDate(phaseOne.link_hacker.submissionDate.toDate())}
							</>
						) : (
							<>Not yet Submitted</>
						)}
					</div>
				</div>
				<div className="text-white">
					<h1>Hipster: </h1>
					<div>
						{/* Bisa masukin svg bulet biru atau merah */}
						{phaseOne?.link_hipster?.submissionDate ? (
							<>
								Submitted at{" "}
								{formatDate(phaseOne.link_hipster.submissionDate.toDate())}
							</>
						) : (
							<>Not yet Submitted</>
						)}
					</div>
				</div>
			</DropdownContent>
		</div>
	);
}
