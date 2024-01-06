import Image from "next/image";
import { Inter } from "next/font/google";
import ComingSoon from "@/components/landing/soon/ComingSoon";
import HeaderHack from "@/components/landing/header/HeaderHack";
import CountDown from "@/components/landing/countdown/CountDown";
import TimeLine from "@/components/landing/timeline/TimeLine";
import SessionTech from "@/components/landing/session/SessionTech";
import MentorsHack from "@/components/landing/mentors/MentorsHack";
import SponsorsHack from "@/components/landing/sponsors/SponsorsHack";
import MediaPartners from "@/components/landing/mediapartners/MediaPartners";
import OrganizerHack from "@/components/landing/organizer/OrganizerHack";
import FrequentlyAsked from "@/components/landing/faq/FrequentlyAsked";
import DiscordHack from "@/components/landing/discord/DiscordHack";
import Footer from "@/components/landing/layout/Footer";
import Navbar from "@/components/landing/layout/Navbar";
import AlertHead from "@/components/landing/alert/AlertHead";
import PopLanding from "@/components/landing/popup/PopUp";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<NextSeo
				title="HackFest 2024"
				description="HackFest Indonesia is Indonesia’s hackathon held by GDSC Indonesia where university students of different skills from all over Indonesia can come together to experiment and develop impactful software or hardware based on the United Nations 17 SDGs."
				canonical="https://www.gdsc-hackfest.com/"
				openGraph={{
					url: "https://www.gdsc-hackfest.com/",
					title: "HackFest 2024 by GDSC Indonesia",
					description:
						"HackFest Indonesia is Indonesia’s hackathon held by GDSC Indonesia where university students of different skills from all over Indonesia can come together to experiment and develop impactful software or hardware based on the United Nations 17 SDGs.",
					images: [
						{
							url: "/libraries/images/jpg/HackFest-Thumbnail.jpg",
							width: 800,
							height: 450,
							alt: "HackFest 2024 Thumbnail",
							type: "image/jpeg",
						},
					],
					siteName: "GDSC HackFest",
				}}
				twitter={{
					handle: "@handle",
					site: "@site",
					cardType: "summary_large_image",
				}}
				additionalLinkTags={[
					{
						rel: "icon",
						href: "/icon.svg",
					},
				]}
			/>
			{/* <ComingSoon/> */}
			<Navbar />
			{/* <AlertHead /> */}
			{/* <PopLanding/> */}
			<HeaderHack />
			<CountDown />
			<TimeLine />
			<SessionTech />
			<MentorsHack />
			<SponsorsHack />
			<MediaPartners />
			<OrganizerHack />
			{/* <FrequentlyAsked/> */}
			<DiscordHack />
			<Footer />
		</>
	);
}
