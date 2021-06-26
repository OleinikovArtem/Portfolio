import React, { FC } from 'react'

import { ButtonLayout } from '@/components/Button/Button.layout'

import type { IButton } from './Button.types'
import { VariantButton } from './Button.types'

const Button: FC<IButton> = ({ ...props }) => {
	// console.log("Button props: ", props);

	return <ButtonLayout {...props} />
}

export { Button, VariantButton }
