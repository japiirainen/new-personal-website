import { Flex, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { projectDataIf } from 'api'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

export const Projects: React.FC<{ projectData: Array<projectDataIf> }> = ({ projectData }) => {
	const hoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	return (
		<>
			<Heading mb={10} mt={35} fontFamily={'main'} textAlign={'center'}>
				Some of my personal projects
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
				{projectData.map((v, i) => {
					return (
						<NextLink key={i} href={{ pathname: '/projects/[id]', query: { id: v.id } }}>
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
									_hover={{ background: hoverBg, border: '2px' }}
								>
									<Heading
										alignSelf={'center'}
										h={'4.5rem'}
										size={'md'}
										fontFamily={'main'}
									>
										{v.name}
									</Heading>
									<Image
										src={v.image}
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
										<Text fontFamily={'main'}>{v.smallDesc}</Text>
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
