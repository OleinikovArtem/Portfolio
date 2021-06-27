import type { FC } from 'react'

import cls from './PresentText.module.scss'

const PresentTextLayout: FC = () => (
	<section className={cls.wrapper}>
		<div className={cls.positionBlock}>
			<article className={cls.block}>
				<h1 className={cls.title}>Web Developer</h1>
				<p className={cls.description}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
					culpa fugiat hic id ipsam ipsum iure magnam modi officia perspiciatis
					placeat, possimus quidem quo saepe sed tempora ullam vero?
				</p>
			</article>
		</div>
	</section>
)

export { PresentTextLayout }
