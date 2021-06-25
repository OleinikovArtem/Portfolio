import "@/styles/index.scss";
import "@/styles/components/Navbar.scss";
import "@/polyfills";

import type { AppProps } from "next/app";

import { Layout } from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
