import { chakra, Flex, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import DefaultLayout from '../../_layouts/default'
import { getAllPosts } from 'api'
import NextLink from 'next/link'

export interface postFrontMatterIf {
	title: string
	slug: string
	date: string
	id: string
	mainImage: string
	readTime: string
	intro: string
}
interface indexIf {
	postData: Array<postFrontMatterIf>
}

const IndexPage: React.FC<indexIf> = ({ postData }) => {
	const postHoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	return (
		<DefaultLayout title={'Joona Piirainen'} description={'Personal website'}>
			<Heading
				alignSelf={'center'}
				justifyContent={'center'}
				fontFamily={'main'}
				w={'100%'}
				my={5}
				mb={10}
			>
				Articles written by me
			</Heading>
			<SimpleGrid columns={1} spacing={4} pb={180}>
				{postData.map((v, i) => {
					return (
						<NextLink key={i} href={{ pathname: '/blog/[id]', query: { id: String(v.id) } }}>
							<a>
								<Flex
									direction={'column'}
									justify={'space-between'}
									w={'auto'}
									h={'auto'}
									maxH={550}
									border={'1px'}
									borderColor={'gray.300'}
									py={3}
									px={5}
									_hover={{ background: postHoverBg, border: '2px' }}
								>
									<Heading alignSelf={'center'} size={'lg'} mb={3} fontFamily={'main'}>
										{v.title}
									</Heading>
									<Text fontStyle={'italic'} fontSize={14} mb={3}>
										{v.intro}{' '}
										<chakra.span borderBottom={'1px'} borderBottomStyle={'dashed'}>
											Keep reading
										</chakra.span>
									</Text>
									<Flex pt={2}>
										<Text fontFamily={'main'}>posted on:</Text>
										<Text ml={'auto'} fontFamily={'main'}>
											read time:
										</Text>
									</Flex>
									<Flex pt={1}>
										<Text fontFamily={'main'}>{v.date}</Text>
										<Text ml={'auto'} fontFamily={'main'}>
											{v.readTime}
										</Text>
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

export async function getServerSideProps() {
	const postData = await getAllPosts()
	return {
		props: {
			postData,
		},
	}
}
