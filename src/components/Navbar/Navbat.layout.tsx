import Link from "next/link";
import React, { FC } from "react";

const NavbarLayout: FC = () => (
	<nav className="navigation">
		<div className="navigation__logo code">
			<em>[AO]</em>_dev
		</div>
		<menu className="navigation__menu">
			<li className="navigation__menu-item">
				<Link href="" passHref prefetch>
					<a className="navigation__menu-link" href="">
						Home
					</a>
				</Link>
			</li>
			<li className="navigation__menu-item">
				<Link href="" passHref prefetch>
					<a className="navigation__menu-link" href="">
						About Me
					</a>
				</Link>
			</li>
			<li className="navigation__menu-item">
				<Link href="" passHref prefetch>
					<a className="navigation__menu-link" href="">
						Skills
					</a>
				</Link>
			</li>
			<li className="navigation__menu-item">
				<Link href="" passHref prefetch>
					<a className="navigation__menu-link" href="">
						Portfolio
					</a>
				</Link>
			</li>
			<li className="navigation__menu-item">
				<Link href="" passHref prefetch>
					<a className="navigation__menu-link" href="">
						Experience
					</a>
				</Link>
			</li>
		</menu>
	</nav>
);

export { NavbarLayout };
