import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";
import "./css/individual.module.css";
import FirstHustlerDesc from "./phases-desc/hustler/FirstHustlerDesc";

export default function Hustler(
	teamData: any,
	role: string,
	onSubmit: () => Promise<any>
) {
	const canSubmit = role === "Hustler";
	return (
		<div className={individualStyle.container}>
			<div>
				<Phase
					onSubmit={onSubmit}
					canSubmit={canSubmit}
					key="hustler_1"
					title="Business Model Canvas"
					desc={FirstHustlerDesc()}
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hustler"
				></Phase>
			</div>
		</div>
	);
}
