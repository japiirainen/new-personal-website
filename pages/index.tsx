import { Flex, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import DefaultLayout from '../_layouts/default'
import matter from 'gray-matter'
import Image from 'next/image'
import NextLink from 'next/link'

interface postFrontMatterIf {
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
	const postHoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	return (
		<DefaultLayout title={'Joona Piirainen'} description={'Personal website'}>
			<Heading fontFamily={'main'} w={'100%'} my={5}>
				Recent blog posts
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
				{postData.map((v, i) => {
					return (
						<NextLink key={i} href={{ pathname: '/blog/[id]', query: { id: v.id } }}>
							<a>
								<Flex
									direction={'column'}
									justify={'space-between'}
									w={'auto'}
									h={'auto'}
									border={'1px'}
									borderColor={'gray.300'}
									py={3}
									px={1}
									_hover={{ background: postHoverBg, border: '2px' }}
								>
									<Heading
										alignSelf={'center'}
										h={'3.5rem'}
										size={'md'}
										fontFamily={'main'}
									>
										{v.title}
									</Heading>
									<Image
										src={v.mainImage}
										alt={'image' + v}
										layout={'responsive'}
										width={'100%'}
										height={50}
									/>
									<Flex pt={2}>
										<Text>posted on:</Text>
										<Text ml={'auto'}>read time:</Text>
									</Flex>
									<Flex pt={1}>
										<Text>{v.date}</Text>
										<Text ml={'auto'}>{v.readTime}</Text>
									</Flex>
								</Flex>
							</a>
						</NextLink>
					)
				})}
			</SimpleGrid>
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
	const postData = blogPostData.map((v, i) => ({ ...v, id: data[i].id }))
	console.log(data)

	return {
		props: {
			postData,
		},
	}
}
