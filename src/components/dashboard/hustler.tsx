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
				{/* <Phase
					onSubmit={onSubmit}
					canSubmit={canSubmit && new Date() <= new Date("2024-01-02")}
					key="hustler_1"
					title="Business Model Canvas"
					desc={FirstHustlerDesc()}
					deadline="02 January 2023"
					stage="1"
					teamData={teamData}
					role="hustler"
				></Phase> */}
				<Phase
					onSubmit={onSubmit}
					canSubmit={canSubmit && new Date() <= new Date("2024-01-13")}
					key="hustler_2"
					title="Hustler 2nd Submission"
					desc={<></>}
					deadline="12 January 2023"
					stage="2"
					teamData={teamData}
					role="hustler"
				></Phase>
			</div>
		</div>
	);
}
