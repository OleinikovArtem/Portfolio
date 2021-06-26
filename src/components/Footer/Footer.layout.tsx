import type { FC } from 'react'

import { Button, VariantButton } from '@/components/Button'
import type { IFooter } from '@/components/Footer/Footer.types'
import { Icon, IconManes } from '@/components/Icon'

const FooterLayout: FC<IFooter> = ({ handleDownloadCV }) => (
	<footer className="footer">
		<Button
			variant={VariantButton.text}
			onClick={handleDownloadCV}
			icon={<Icon name={IconManes.Download} />}
		>
			Download CV
		</Button>
		<span className="my-name">Artem Oleinikov</span>
	</footer>
)

export { FooterLayout }
