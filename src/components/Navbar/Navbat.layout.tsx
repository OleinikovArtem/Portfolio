import Link from 'next/link'
import React, { FC } from 'react'

const NavbarLayout: FC = () => (
	<nav className="navigation">
		<div className="navigation__lang code">EN</div>
		<menu className="navigation__menu">
			<li className="navigation__menu-item">
				<Link href="/" passHref prefetch>
					<a className="navigation__menu-link" href="">
						Home
					</a>
				</Link>
			</li>
			<li className="navigation__menu-item">
				<Link href="/about" passHref prefetch>
					<a className="navigation__menu-link">About Me</a>
				</Link>
			</li>
			<li className="navigation__menu-item">
				<Link href="/skills" passHref prefetch>
					<a className="navigation__menu-link">Skills</a>
				</Link>
			</li>
			<li className="navigation__menu-item">
				<Link href="/portfolio" passHref prefetch>
					<a className="navigation__menu-link">Portfolio</a>
				</Link>
			</li>
			<li className="navigation__menu-item">
				<Link href="/experience" passHref prefetch>
					<a className="navigation__menu-link">Experience</a>
				</Link>
			</li>
		</menu>
	</nav>
)

export { NavbarLayout }
