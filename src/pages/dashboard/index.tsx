import Footer from "@/components/landing/layout/Footer";
import Navbar from "@/components/landing/layout/Navbar";
import Hacker from "@/components/dashboard/hacker";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import Hipster from "@/components/dashboard/hipster";
import Summary from "@/components/dashboard/summary";
import Hustler from "@/components/dashboard/hustler";
import { getTeamByTeamId, getUserByEmail } from "@/lib/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import Router from "next/router";
import Loading from "@/components/dashboard/elements/loading";

export interface TeamData {
	[index: string]: string;
	name: string;
}

export default function Dashboard() {
	const [authLoading, setAuthLoading] = useState(true);
	const [teamName, setTeamName] = useState("Team's Name");
	const [teamData, setTeamData] = useState<TeamData>({} as TeamData);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const userData = await getUserByEmail(user.email || "");
				if (!userData) {
					Router.push("/not-authorized");
					return;
				}

				const teamData = await getTeamByTeamId(userData.teamId);
				setTeamData(teamData);
				setAuthLoading(false);
			} else {
				Router.push("/");
			}
		});
	});

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

	return authLoading ? (
		<Loading />
	) : (
		<>
			<Navbar />
			<div className={style.dashHeader}>
				<div className={style.dashTeamName}>
					<h1>{teamName}</h1>
				</div>
				<div className={style.dashHackLogo}>
					<h1>HACKFEST 2024</h1>
				</div>
			</div>
			<div className={style.teamName}>
				<h1>{teamData.name}</h1>
			</div>
			<div className={style.dashSwitcher}>
				<div className={style.dashCaps}>
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
			</div>
			<div className={style.individuContainer}>{renderIndividu()}</div>
			<Footer />
		</>
	);
}
