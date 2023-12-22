import { useEffect } from "react";
import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";
import { useAppStyle } from "@/styles/tailwind";
import { TeamData } from "@/lib/firestore";

export default function Hacker(teamData: TeamData) {
	const style = useAppStyle();
	return (
		<div className={individualStyle.container}>
			<div>
				<Phase
					key="hacker_1"
					title="Algorithm Limitation"
					desc="This is description"
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hacker"
				></Phase>
			</div>
		</div>
	);
}
