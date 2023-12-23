import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";
import FirstHipsterDesc from "./phases-desc/hipster/FirstHipsterDesc";

export default function Hipster(
	teamData: any,
	role: string,
	onSubmit: () => Promise<any>
) {
	const canSubmit = role === "Hipster";
	return (
		<div className={individualStyle.container}>
			<div>
				<Phase
					onSubmit={onSubmit}
					canSubmit={canSubmit}
					key="hipster_1"
					title="User Persona & Wireframe"
					desc={FirstHipsterDesc()}
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hipster"
				></Phase>
			</div>
		</div>
	);
}
