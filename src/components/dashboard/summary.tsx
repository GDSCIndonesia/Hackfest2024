import { useEffect } from "react";
import individualStyle from "./css/individual.module.css";

export default function Summary(teamData: any) {
	useEffect(() => {
		console.log(teamData);
	}, [teamData])

	return (
		<div className={individualStyle.container}>
			<h1>This is team's summary progress</h1>
			<p>Please do accordingly</p>
		</div>
	);
}
