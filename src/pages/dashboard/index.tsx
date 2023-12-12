import Footer from "@/components/landing/layout/Footer";
import Navbar from "@/components/landing/layout/Navbar";
import Hacker from "@/components/dashboard/hacker";
import style from "./index.module.css";
import { useState } from "react";
import Hipster from "@/components/dashboard/hipster";
import Summary from "@/components/dashboard/summary";
import Hustler from "@/components/dashboard/hustler";

export default function Dashboard() {
	type Roles = keyof typeof components;

	const components = {
		hacker: Hacker(),
		hipster: Hipster(),
		summary: Summary(),
		hustler: Hustler(),
	};

	const [active, setActive] = useState("summary");

	function renderIndividu() {
		return components[active as Roles];
	}

	return (
		<>
			<Navbar />
			<div className={style.teamName}>
				<h1>Team's Name</h1>
			</div>
			<div className={style.navigation}>
				<button
					onClick={() => setActive("summary")}
					className={
						active === "summary" ? style.active : style.navigationButton
					}
				>
					Team's Name
				</button>
				<button
					onClick={() => setActive("hacker")}
					className={
						active === "hacker" ? style.active : style.navigationButton
					}
				>
					Hacker
				</button>
				<button
					onClick={() => setActive("hipster")}
					className={
						active === "hipster" ? style.active : style.navigationButton
					}
				>
					Hipster
				</button>
				<button
					onClick={() => setActive("hustler")}
					className={
						active === "hustler" ? style.active : style.navigationButton
					}
				>
					Hustler
				</button>
			</div>
			<div className={style.individuContainer}>{renderIndividu()}</div>
			<Footer />
		</>
	);
}
