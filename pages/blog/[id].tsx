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

export async function getStaticProps({ params: { id } }) {
	//fetch md here with id
	return {
		props: {
			title: 'foo',
			contents: '<p>bar</p>',
			description: 'baz',
		},
	}
}

export async function getStaticPaths() {
	const res = await fetch('https://api.github.com/users/japiirainen/gists')
	const data = await res.json()

	const paths = data.map(v => ({
		params: { id: v.id },
	}))

	return { paths, fallback: false }
}
