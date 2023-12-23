import Footer from "@/components/landing/layout/Footer";
import Navbar from "@/components/landing/layout/Navbar";
import Hacker from "@/components/dashboard/hacker";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import Hipster from "@/components/dashboard/hipster";
import Summary from "@/components/dashboard/summary";
import Hustler from "@/components/dashboard/hustler";
import { TeamData, getTeamByTeamId, getUserByEmail } from "@/lib/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import Router from "next/router";
import Loading from "@/components/dashboard/elements/loading";

export default function Dashboard() {
	const [authLoading, setAuthLoading] = useState(true);
	const [teamName, setTeamName] = useState("Team's Name");
	const [teamData, setTeamData] = useState<TeamData>({} as TeamData);
	const [user, setUser] = useState("");
	const [role, setRole] = useState("");
	const [active, setActive] = useState("");

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
				setUser(user.email || "");
				setActive(userData?.role);
				setRole(userData?.role);
			} else {
				Router.push("/");
			}
		});
	}, [user]);

	type Roles = keyof typeof components;

	const components = {
		Hacker: Hacker(teamData, role),
		Hipster: Hipster(teamData, role),
		//summary: Summary(teamData),
		Hustler: Hustler(teamData, role),
	};

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
					<h1>{teamData.name}</h1>
				</div>
				<div className={style.dashHackLogo}>
					<h1>HACKFEST 2024</h1>
				</div>
			</div>
			<div className={style.dashSwitcher}>
				<div className={style.dashCaps}>
					{/* <button
						onClick={() => setActive("summary")}
						className={
							active === "summary" ? style.active : style.navigationButton
						}
					>
						Summary
					</button> */}
					<button
						onClick={() => setActive("Hacker")}
						className={
							active === "Hacker" ? style.active : style.navigationButton
						}
					>
						Hacker
					</button>
					<button
						onClick={() => setActive("Hipster")}
						className={
							active === "Hipster" ? style.active : style.navigationButton
						}
					>
						Hipster
					</button>
					<button
						onClick={() => setActive("Hustler")}
						className={
							active === "Hustler" ? style.active : style.navigationButton
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
