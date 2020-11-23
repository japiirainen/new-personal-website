import PostLayout from '../../_layouts/Post'

interface postIf {
	title: string
	contents: string
	description: string
}

const Post: React.FC<postIf> = ({ contents, description, title }) => {
	return <PostLayout title={title} description={description} contents={contents} />
}

export default Post

export async function getStaticProps() {
	return {
		props: {
			title: 'foo',
			contents: '<p>bar</p>',
			description: 'baz',
		},
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: 'foo' } },
			{ params: { slug: 'bar' } },
			{ params: { slug: 'baz' } },
		],
		fallback: false,
	}
}
