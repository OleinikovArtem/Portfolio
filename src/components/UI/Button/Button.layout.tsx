import React, { FC } from 'react'

import type { IButton } from './Button.types'
import { VariantButton } from './Button.types'

const ButtonLayout: FC<IButton> = ({
	children,
	variant = VariantButton.text,
	onClick,
	icon,
}) => (
	<button
		className={`btn btn__${variant} ${icon ? 'btn__icon' : ''}`}
		onClick={onClick}
		type="button"
	>
		{children}
		{icon}
	</button>
)

export { ButtonLayout }
