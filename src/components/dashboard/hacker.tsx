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
				<Phase
					onSubmit={onSubmit}
					canSubmit={canSubmit}
					key="hacker_1"
					title="Use Case & Sequence Diagram"
					desc={FirstHackerDesc()}
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hacker"
				></Phase>
			</div>
		</div>
	);
}
