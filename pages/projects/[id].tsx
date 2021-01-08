import { projectData, projectDataIf } from 'api'
import ProjectLayout from '../../_layouts/Project'

interface projectif {
	data: projectDataIf
}

const Post: React.FC<projectif> = ({ data }) => {
	return (
		<ProjectLayout
			name={data.name}
			image={data.image}
			publiUrl={data.publiUrl}
			githubUrl={data.githubUrl}
			id={data.id}
			smallDesc={data.smallDesc}
			description={data.description}
			npmUrl={data.npmUrl}
		/>
	)
}

export default Post

export async function getStaticProps({ params: { id } }) {
	const data = projectData.find(v => v.id === +id)

	return {
		props: {
			data,
		},
	}
}

export async function getStaticPaths() {
	const ids = projectData.map(v => String(v.id))

	const paths = ids.map(v => ({
		params: { id: v },
	}))

	return { paths, fallback: false }
}
