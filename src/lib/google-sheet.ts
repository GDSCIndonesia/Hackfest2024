import { google, sheets_v4 } from "googleapis";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import { Phase, TeamData } from "./firestore";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const credentials = {
	type: process.env.SHEET_AUTH_TYPE,
	project_id: process.env.SHEET_PROJECT_ID,
	private_key_id: process.env.SHEET_PRIVATE_KEY_ID,
	private_key: process.env.SHEET_PRIVATE_KEY?.replaceAll("\\n", "\n"),
	client_email: process.env.SHEET_CLIENT_EMAIL,
	client_id: process.env.SHEET_CLIENT_ID,
	auth_uri: process.env.SHEET_AUTH_URI,
	token_uri: process.env.SHEET_TOKEN_URI,
	auth_provider_x509_cert_url: process.env.SHEET_AUTH_PROVIDER_X509_CERT_URL,
	client_x509_cert_url: process.env.SHEET_CLIENT_X509_CERT_URL,
	universe_domain: process.env.SHEET_UNIVERSE_DOMAIN,
};

async function getTeamsData() {
	let q = query(collection(db, "teams"));
	const snapshot = await getDocs(q);

	const submissions: string[][] = [];

	snapshot.docs.forEach((doc) => {
		submissions.push(getRowData(doc.data() as TeamData));
	});

	return submissions;
}

function getRowData(team: TeamData) {
	const phases = [1, 2, 3];
	const roles = ["hacker", "hipster", "hustler"];
	const result = [team.name];

	for (const phase of phases) {
		if (team["phase_" + phase]) {
			for (const role of roles) {
				if ((<Phase>team["phase_" + phase])["link_" + role])
					result.push(
						(<Phase>team["phase_" + phase])["link_" + role].link || ""
					);
				else result.push("");
			}
		} else {
			for (const _ of roles) {
				result.push("");
			}
		}
	}

	return result;
}

async function getAuthToken() {
	const auth = new google.auth.GoogleAuth({
		credentials: credentials,
		scopes: SCOPES,
	});
	return auth;
}

async function updateSheet({
	spreadSheetId,
	auth,
	datas,
	range,
}: {
	spreadSheetId: string;
	auth: sheets_v4.Options["auth"];
	datas: string[][];
	range: object;
}) {
	try {
		// google sheet instance
		const sheetInstance = await google.sheets({
			version: "v4",
			auth: auth,
		});

		const request = {
			auth: auth,
			spreadsheetId: spreadSheetId,
			resource: {
				requests: [
					{
						updateCells: {
							range,
							fields: "userEnteredValue,userEnteredFormat",
							rows: [
								datas.map((e) => {
									return {
										values: e.map((row, i) => {
											return {
												userEnteredValue:
													i === 0
														? { stringValue: row }
														: { formulaValue: `=HYPERLINK("${row}")` },
												userEnteredFormat:
													i === 0
														? {
																backgroundColor: {
																	red: 1,
																	green: 1,
																	blue: 1,
																	alpha: 0,
																},
														  }
														: row === ""
														? {
																backgroundColor: {
																	red: 0.95,
																	green: 0.8,
																	blue: 0.8,
																},
														  }
														: {
																backgroundColor: {
																	red: 0.71,
																	green: 0.88,
																	blue: 0.8,
																},
														  },
											};
										}),
									};
								}),
							],
						},
					},
				],
			},
		};
		await sheetInstance.spreadsheets.batchUpdate(request);
	} catch (err) {
		console.log("updateSheet func() error", err);
	}
}

export { getAuthToken, updateSheet, getTeamsData };
