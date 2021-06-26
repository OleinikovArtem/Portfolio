import '@/polyfills'
import '@/styles/index.scss'
import '@/styles/components/Navbar.scss'
import '@/styles/components/Footer.scss'
import '@/styles/components/Button.scss'

import type { AppProps } from 'next/app'

import { Layout } from '@/components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
