import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";
export default function Hipster() {
	return (
		<div className={individualStyle.container}>
			<div>
				<Phase
					title="Algorithm Limitation"
					desc="This is description"
					deadline="02 January 2023"
					stage="1"
				></Phase>
				<Phase
					title="Falcom Heavy Ready to Launch"
					desc="This is description"
					deadline="10 January 2023"
					stage="2"
				></Phase>
			</div>
		</div>
	);
}
