import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";
import { TeamData } from "@/lib/firestore";
import FirstHackerDesc from "./phases-desc/hacker/FirstHackerDesc";

export default function Hacker(
	teamData: TeamData,
	role: string,
	onSubmit: () => Promise<any>
) {
	const canSubmit = role === "Hacker";
	return (
		<div className={individualStyle.container}>
			<div>
				{/* <Phase
					onSubmit={onSubmit}
					canSubmit={canSubmit && new Date() <= new Date("2024-01-02")}
					key="hacker_1"
					title="Use Case & Sequence Diagram"
					desc={FirstHackerDesc()}
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hacker"
				></Phase> */}
				<Phase
					onSubmit={onSubmit}
					canSubmit={false}
					key="hacker_2"
					title="Hacker 2nd Submission"
					desc={<></>}
					deadline="12 January 2023"
					stage="2"
					teamData={teamData}
					role="hacker"
				></Phase>
			</div>
		</div>
	);
}
