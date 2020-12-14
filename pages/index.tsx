import { Flex, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import DefaultLayout from '../_layouts/default'
import { getAllPosts } from 'api'
import { take } from 'ramda'
import { RecentPosts } from 'components/RecentPosts'
import { WelcomeMessage } from 'components/WelcomeMessage'

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
		<DefaultLayout title={'Joona Piirainen'} description={'Personal website'}>
			<WelcomeMessage />
			<RecentPosts postData={postData} />
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
