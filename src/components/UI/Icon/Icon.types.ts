enum IconManes {
	Download = 'Download',
}

interface IIcon {
	name: IconManes
	size?: { width?: number; height?: number }
}

export { IconManes }
export type { IIcon }
