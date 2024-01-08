// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuthToken, getTeamsData, updateSheet } from "@/lib/google-sheet";
import { getFirestore } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const firebaseConfig = {
		apiKey: process.env.NEXT_PUBLIC_APIKEY,
		authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
		messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
		appId: process.env.NEXT_PUBLIC_APPID,
		measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
	};

	const app =
		getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const db = getFirestore(app);
	const storage = getStorage(app);
	try {
		const datas = await getTeamsData(db);
		const auth = await getAuthToken();
		const range = {
			sheetId: 1696575772, // find your own
			startRowIndex: 2,
			endRowIndex: datas.length + 3,
			startColumnIndex: 0,
			endColumnIndex: 10,
		};
		updateSheet({
			spreadSheetId: "1ZPRtBNQ55IFoIWYm7DxBs90jHzv8vG_kxcXAEha_TNs",
			auth,
			datas,
			range,
		});
		res.status(200).end("Success");
	} catch (e) {
		console.log(e);
		res.status(500).end("Failed");
	}
}
