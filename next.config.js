/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')()
module.exports = withMDX()
module.exports = {
	images: {
		domains: ['images.unsplash.com', 's3.eu-north-1.amazonaws.com'],
	},
}
