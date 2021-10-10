import { getPostById } from 'api'
import { postFrontMatterIf } from 'pages'
import PostLayout from '../../_layouts/Post'
import renderToString from 'next-mdx-remote/render-to-string'

interface postIf {
	data: postFrontMatterIf
	content: string
}

const Post: React.FC<postIf> = ({ data, content }) => {
	return (
		<PostLayout
			title={data.title}
			image={data.mainImage}
			slug={data.slug}
			contents={content}
			date={data.date}
			readTime={data.readTime}
		/>
	)
}

export default Post

export async function getServerSideProps({ params: { id } }) {
	const { content, data } = await getPostById(id)
	const mdx = await renderToString(content, {
		mdxOptions: {},
	})
	return {
		props: {
			data,
			content: mdx,
		},
	}
}
