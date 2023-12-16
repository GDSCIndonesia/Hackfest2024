import Footer from "@/components/landing/layout/Footer";
import Navbar from "@/components/landing/layout/Navbar";
import Hacker from "@/components/dashboard/hacker";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import Hipster from "@/components/dashboard/hipster";
import Summary from "@/components/dashboard/summary";
import Hustler from "@/components/dashboard/hustler";
import { getTeamByTeamId, getUserByEmail } from "@/lib/firestore";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase";


export default function Dashboard() {
	const [user, setUser] = useAuthState(auth)
	const [teamName, setTeamName] = useState("Team's Name")
	const [teamData, setTeamData] = useState({})
	useEffect(() => {
		let email = user?.email || ''
		getUserByEmail(email)
			.then((data: any) => {
				return getTeamByTeamId(data.teamId)
			})
			.then((data: any) => {
				if (data) {
					setTeamName(data?.name)
					setTeamData(data)
				}
			})
	}, [user])

	type Roles = keyof typeof components;

	const components = {
		hacker: Hacker(teamData),
		hipster: Hipster(teamData),
		summary: Summary(teamData),
		hustler: Hustler(teamData),
	};

	const [active, setActive] = useState("summary");

	function renderIndividu() {
		return components[active as Roles];
	}

	useEffect(() => {

	})

	return (
		<>
			<Navbar />
			<div className={style.teamName}>
				<h1>{teamName}</h1>
			</div>
			<div className={style.navigation}>
				<button
					onClick={() => setActive("summary")}
					className={
						active === "summary" ? style.active : style.navigationButton
					}
				>
					Summary
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
