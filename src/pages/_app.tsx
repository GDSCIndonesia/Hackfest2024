import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";
import { initGA, logPageView } from "../components/analytics/analytics";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-83NDQYGPEV"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-83NDQYGPEV');
				`}
			</Script>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}
