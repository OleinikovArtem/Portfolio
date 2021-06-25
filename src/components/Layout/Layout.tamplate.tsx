import React, { FC } from "react";

import { Navbar } from "@/components/Navbar";

const LayoutTemplate: FC = ({ children }) => (
	<>
		<header>
			<Navbar />
		</header>
		<main>{children}</main>
		<footer>
			<h2>footer</h2>
		</footer>
	</>
);

export { LayoutTemplate };
