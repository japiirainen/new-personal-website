import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Heading, SimpleGrid, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { postFrontMatterIf } from 'pages'

interface RecentPostsProps {
	postData: Array<postFrontMatterIf>
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ postData }) => {
	const postHoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	return (
		<>
			<Heading textAlign={'center'} fontFamily={'main'} w={'100%'} my={5}>
				Recent blog posts
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} pb={180}>
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
										h={'4.5rem'}
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
		</>
	)
}
