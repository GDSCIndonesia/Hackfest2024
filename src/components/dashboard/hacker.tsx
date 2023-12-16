import { useEffect } from "react";
import individualStyle from "./css/individual.module.css";
import Phase from "./elements/phase";
import { useAppStyle } from "@/styles/tailwind";

export default function Hacker(teamData: any) {
	useEffect(() => {
		console.log(teamData?.phase_1?.link_hacker);
	}, [teamData])

	const style = useAppStyle();
	return (
		<div className={individualStyle.container}>
			<div>
				<Phase
					title="Algorithm Limitation"
					desc="This is description"
					deadline="02 January 2023"
					submission={{
						submissionDate: "01 January 2023",
						link: "https://jose.ryu/hello-world",
					}}
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
