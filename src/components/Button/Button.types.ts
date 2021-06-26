import type { ReactChild } from 'react'

enum VariantButton {
	outline = 'outline',
	fill = 'fill',
	text = 'text',
}

interface IButton {
	variant?: VariantButton
	onClick: React.MouseEventHandler<HTMLButtonElement>
	icon?: ReactChild
}

export { VariantButton }
export type { IButton }
