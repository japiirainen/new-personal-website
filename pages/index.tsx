import { Box } from '@chakra-ui/react'
import DefaultLayout from '../_layouts/default'

interface indexIf {
	title: string
	description: string
}

const IndexPage: React.FC<indexIf> = ({ title, description }) => {
	return (
		<DefaultLayout title={title} description={description}>
			<Box>foo</Box>
			<Box>bar</Box>
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
