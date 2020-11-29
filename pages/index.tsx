import { Box, Button, useColorMode } from '@chakra-ui/react'
import { getConfig } from '../api/index'
import DefaultLayout from '../_layouts/default'

interface indexIf {
	title: string
	description: string
}

const IndexPage: React.FC<indexIf> = ({ title, description }) => {
	const { toggleColorMode, colorMode } = useColorMode()

	return (
		<DefaultLayout title={title} description={description}>
			<Box>lol</Box>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>
		</DefaultLayout>
	)
}

export default IndexPage

export async function getStaticProps() {
	// const blogNr1 = await octo.request('GET /gists/{gist_id}', {
	// 	gist_id: '9d7a006b8b521629f92e1d1aae34f5e2',
	// })
	// console.log('blog', blogNr1)
	return {
		props: {
			title: 'foo',
			description: 'bar',
		},
	}
}
