import type { FC } from 'react'

import { IconLayout } from '@/components/Icon/Icon.layout'
import type { IIcon } from '@/components/Icon/Icon.types'
import { IconManes } from '@/components/Icon/Icon.types'

const Icon: FC<IIcon> = ({ size, ...props }) => {
	return <IconLayout {...props} />
}

export { Icon, IconManes }
