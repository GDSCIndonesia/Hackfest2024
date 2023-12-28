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

export interface TeamData {
	[index: string]: string | Phase;
	id: string;
	name: string;
	gdsc_chapter: string;
	idea_description: string;
}

export interface Phase {
	[index: string]: Submission;
}

export interface Submission {
	link: string;
	submissionDate: Timestamp;
}

export interface Member {
	email: string;
	name: string;
	role: string;
	verified: boolean;
}

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
			verified: boolean;
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

export async function getUsersByTeamId(teamId: string): Promise<Member[]> {
	let q = query(collection(db, "users"));
	q = query(q, where("teamId", "==", teamId));
	const results = await getDocs(q);

	return results.docs.map((doc) => {
		const data = doc.data();
		return {
			name: data.name,
			email: data.email,
			role: data.role,
			verified: data.verified
		};
	});
}

export async function updateLink({
	teamId,
	role,
	phase,
	link,
}: {
	teamId: string;
	role: string;
	phase: string;
	link: string;
}) {
	const team = doc(db, "teams", teamId);

	const data = {} as { [index: string]: string | object };

	data[phase + ".link_" + role] = {
		link,
		submissionDate: new Date(),
	};

	await updateDoc(team, data);
}

export async function updateVerified(id: string) {
	const user = doc(db, "users", id);
	await updateDoc(user, { verified: true });
}