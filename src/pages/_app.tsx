import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from 'react';
import { initGA, logPageView } from '../components/analytics/analytics';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		initGA(); 
		logPageView(); 
	  }, []);
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}
