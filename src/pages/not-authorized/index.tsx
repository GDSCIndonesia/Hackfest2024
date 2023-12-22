import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Router from "next/router";
export default function NotAuthorized() {
	const back = async () => {
		await signOut(auth);
		Router.push("/");
	};
	return (
		<div className="flex flex-col justify-center items-center align-center w-full h-full">
			<h1 className="font-gooBold text-white text-2xl">
				I'm sorry, you're not a participant in the event
			</h1>
			<button
				className="mt-[25px] block text-hackWhite font-gooBold bg-hackBlue text-center lg:text-left w-full lg:w-fit px-[30px] py-[10px] text-[15px] 2xl:text-[20px]"
				onClick={() => back()}
			>
				Back to Landing Page
			</button>
		</div>
	);
}
