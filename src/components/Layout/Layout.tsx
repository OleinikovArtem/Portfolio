import React, { FC } from "react";

import { LayoutTemplate } from "./Layout.tamplate";

const Layout: FC = ({ children }) => {
	console.log("render layout");

	return <LayoutTemplate>{children}</LayoutTemplate>;
};

export { Layout };
