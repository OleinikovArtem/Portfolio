import type { FC } from 'react'

import { IconLayout } from './Icon.layout'
import type { IIcon } from './Icon.types'
import { IconManes } from './Icon.types'

const Icon: FC<IIcon> = ({ size, ...props }) => {
	return <IconLayout {...props} />
}

export { Icon, IconManes }
