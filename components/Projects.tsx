import {
	chakra,
	Flex,
	Heading,
	StackDivider,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { projectDataIf } from 'api'
import NextLink from 'next/link'
import React from 'react'
import { ImGithub } from 'react-icons/im'
import { SocialIcon } from '_includes/Footer'

export const Projects: React.FC<{ projectData: Array<projectDataIf> }> = ({ projectData }) => {
	const hoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	return (
		<>
			<Heading mb={10} mt={55} fontFamily={'main'} textAlign={'center'}>
				Code written by me
			</Heading>
			<VStack divider={<StackDivider borderColor={hoverBg} />} spacing={4} align={'stretch'}>
				{projectData.map((v, i) => {
					return (
						<Flex
							key={i}
							direction={'row'}
							justify={'space-between'}
							w={'auto'}
							h={'auto'}
							py={4}
							px={1}
						>
							<a>
								<NextLink
									key={i}
									href={{ pathname: '/projects/[id]', query: { id: v.id } }}
								>
									<Heading
										_hover={{ cursor: 'pointer', color: hoverBg }}
										alignSelf={'center'}
										fontSize={25}
										fontFamily={'main'}
									>
										{v.name}
									</Heading>
								</NextLink>
							</a>
							<Flex direction={'row'} pt={1} w={300}>
								<Text fontFamily={'main'}>{v.smallDesc}</Text>
								<chakra.a
									ml={'auto'}
									_hover={{ color: hoverBg, cursor: 'pointer' }}
									target={'_blank'}
									href={v.githubUrl}
								>
									<SocialIcon as={ImGithub} />
								</chakra.a>
							</Flex>
						</Flex>
					)
				})}
			</VStack>
		</>
	)
}
