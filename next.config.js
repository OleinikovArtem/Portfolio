const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const path = require("path");

module.exports = withPlugins(
	[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	{
		reactStrictMode: true,
		future: {
			strictPostcssConfiguration: true,
		},
		sassOptions: {
			includePaths: [path.join(__dirname, "src")],
		},
	},
);
