// import type { SyntheticEvent } from "react";
import React, { FC } from 'react'

import { FooterLayout } from './Footer.layout'

const Footer: FC = () => {
	const handleDownloadCV = () => {
		alert('Download CV')
	}

	return <FooterLayout handleDownloadCV={handleDownloadCV} />
}

export { Footer }
