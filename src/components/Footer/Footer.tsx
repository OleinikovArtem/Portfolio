import React, { FC } from 'react'

import { FooterLayout } from './Footer.layout'

const Footer: FC = () => {
	const handleDownloadCV = () => {
		console.log('CV Download')
	}

	return <FooterLayout handleDownloadCV={handleDownloadCV} />
}

export { Footer }
