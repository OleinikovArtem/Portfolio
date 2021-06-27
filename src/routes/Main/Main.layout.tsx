import type { FC } from 'react'

import { TitleSVG } from '@/components/UI/TitleSVG'

import { PresentText } from './PresentText'

const MainLayout: FC = () => {
	return (
		<div className="container relative">
			<TitleSVG />
			<PresentText />
		</div>
	)
}

export { MainLayout }
