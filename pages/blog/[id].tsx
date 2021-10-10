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

export async function getStaticProps({ params: { id } }) {
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

export async function getStaticPaths() {
	const res = await fetch('https://api.github.com/users/japiirainen/gists', {
		headers: {
			authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
		},
	})
	const data = await res.json()
	const paths = data.map(v => ({
		params: { id: v.id },
	}))

	return { paths, fallback: false }
}
