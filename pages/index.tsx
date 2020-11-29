import { Box } from '@chakra-ui/react'
import DefaultLayout from '../_layouts/default'
import matter from 'gray-matter'

interface indexIf {
	blogPostData: any
}

const IndexPage: React.FC<indexIf> = ({ blogPostData }) => {
	return (
		<DefaultLayout title={'Joona Piirainen'} description={'Personal website'}>
			<Box>foo</Box>
			<Box>bar</Box>
		</DefaultLayout>
	)
}

export default IndexPage

export async function getStaticProps() {
	const res = await fetch('https://api.github.com/users/japiirainen/gists')
	const data = await res.json()
	const files = data.map(v => v.files)
	const filenames = files.flatMap(Object.keys)
	const rawUrls = files.map((v, i) => v[filenames[i]].raw_url)
	const res2 = await Promise.all(rawUrls.map(url => fetch(url)))
	const jsons = await Promise.all(res2.map((v: any) => v.text()))
	const blogPostData = jsons.map(v => matter(v).data)

	return {
		props: {
			blogPostData,
		},
	}
}
