import DefaultLayout from '../_layouts/default'
import { getAllPosts, projectData } from 'api'
import { take } from 'ramda'
import { RecentPosts } from 'components/RecentPosts'
import { WelcomeMessage } from 'components/WelcomeMessage'
import { Projects } from 'components/Projects'

export interface postFrontMatterIf {
	title: string
	slug: string
	date: string
	id: string
	mainImage: string
	readTime: string
}
interface indexIf {
	postData: Array<postFrontMatterIf>
}

const IndexPage: React.FC<indexIf> = ({ postData }) => {
	return (
		<DefaultLayout title={'Joona Piirainen'} description={'Personal website'} pb={200}>
			<WelcomeMessage />
			<RecentPosts postData={postData} />
			<Projects projectData={projectData} />
		</DefaultLayout>
	)
}

export default IndexPage

export async function getStaticProps() {
	const data = await getAllPosts()
	const postData = take(2)(data)

	return {
		props: {
			postData,
		},
	}
}
