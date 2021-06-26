import React, { FC } from 'react'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const LayoutTemplate: FC = ({ children }) => (
	<>
		<header>
			<Navbar />
		</header>
		<main className="main">{children}</main>
		<Footer />
	</>
)

export { LayoutTemplate }
