import type { FC } from 'react'

import type { IFooter } from '@/components/Footer/Footer.types'
import { Button, VariantButton } from '@/components/UI/Button'
import { Icon, IconManes } from '@/components/UI/Icon'

const FooterLayout: FC<IFooter> = ({ handleDownloadCV }) => (
	<footer className="footer">
		<Button
			variant={VariantButton.text}
			onClick={handleDownloadCV}
			icon={<Icon name={IconManes.Download} />}
		>
			Download CV
		</Button>
		<span className="my-name">Contact with Me</span>
	</footer>
)

export { FooterLayout }
