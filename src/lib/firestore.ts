import {
	collection,
	onSnapshot,
	query,
	getDocs,
	doc,
	getDoc,
	updateDoc,
	orderBy,
	Timestamp,
	runTransaction,
	where,
	addDoc,
} from "firebase/firestore";

import { db } from "./firebase";
import { TeamData } from "@/pages/dashboard";

export async function getUserByEmail(email: string = "") {
	let q = query(collection(db, "users"));
	q = query(q, where("email", "==", email));
	const results = await getDocs(q);
	return results.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
			// Only plain objects can be passed to Client Components from Server Components
		} as {
			id: string;
			teamId: string;
			email: string;
			role: string;
		};
	})[0];
}

export async function getTeamByTeamId(teamId: string = ""): Promise<TeamData> {
	let q = query(collection(db, "teams"));
	q = query(q, where("name", "==", teamId));
	const results = await getDocs(q);
	return results.docs.map((doc) => {
		return {
			id: doc.id,
			name: doc.data().name,
			...doc.data(),
			// Only plain objects can be passed to Client Components from Server Components
		};
	})[0] as TeamData;
}
