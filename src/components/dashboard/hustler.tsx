import { useEffect } from "react";
import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";

export default function Hustler(teamData: any) {
	return (
		<div className={individualStyle.container}>
			<div>
				<Phase
					key="hustler_1"
					title="Algorithm Limitation"
					desc="This is description"
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hustler"
				></Phase>
			</div>
		</div>
	);
}
