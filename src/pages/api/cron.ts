// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuthToken, getTeamsData, updateSheet } from "@/lib/google-sheet";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const datas = await getTeamsData();
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
		res.status(500).end("Failed");
	}
}
