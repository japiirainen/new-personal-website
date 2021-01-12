import DefaultLayout from './default'
import Head from 'next/head'
import {
	Box,
	chakra,
	Flex,
	Heading,
	Link,
	ListItem,
	Text,
	Tooltip,
	UnorderedList,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react'
import { Main } from '_includes/Main'
import Image from 'next/image'
import { NavButton } from 'components/NavButtons'
import router from 'next/router'
import { projectDataIf } from 'api'
import React from 'react'
import { ImGithub, ImNpm } from 'react-icons/im'
import { SocialIcon } from '_includes/Footer'
import { IoMdGlobe } from 'react-icons/io'

const ProjectLayout: React.FC<projectDataIf> = ({
	githubUrl,
	image,
	name,
	publiUrl,
	smallDesc,
	description,
	npmUrl,
	technologies,
}) => {
	const hoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	const mt = useBreakpointValue({ base: -150, md: -10 })
	return (
		<Box pb={200}>
			<Head>
				<title>{name}</title>
			</Head>
			<DefaultLayout title={name} description={smallDesc}>
				<Main variant={'medium'}>
					<Flex mt={mt}>
						<NavButton onClick={() => router.push('/')} label={'<- back home'} />
						<Flex ml={'auto'} direction={'column'}>
							{publiUrl && (
								<Tooltip label={'website'} placement={'top'}>
									<chakra.a
										mb={4}
										ml={'auto'}
										_hover={{ color: hoverBg, cursor: 'pointer' }}
										target={'_blank'}
										href={publiUrl}
									>
										<SocialIcon as={IoMdGlobe} />
									</chakra.a>
								</Tooltip>
							)}
							{npmUrl && (
								<Tooltip label={'npm page'} placement={'top'}>
									<chakra.a
										mb={4}
										ml={'auto'}
										_hover={{ color: hoverBg, cursor: 'pointer' }}
										target={'_blank'}
										href={npmUrl}
									>
										<SocialIcon as={ImNpm} />
									</chakra.a>
								</Tooltip>
							)}
							<Tooltip label={'github'} placement={'top'}>
								<chakra.a
									ml={'auto'}
									_hover={{ color: hoverBg, cursor: 'pointer' }}
									target={'_blank'}
									href={githubUrl}
								>
									<SocialIcon as={ImGithub} />
								</chakra.a>
							</Tooltip>
						</Flex>
					</Flex>
					<Heading size={'lg'} my={5} fontFamily={'main'}>
						{name}
					</Heading>
					<Image src={image} layout={'responsive'} height={'60px'} width={'100%'} />
					<Box
						as={'div'}
						id={'blogpost'}
						mt={10}
						fontFamily={'main'}
						fontSize={17}
						wordBreak={'break-word'}
					>
						{description}
					</Box>
					<Heading size={'lg'} my={5} fontFamily={'main'}>
						Technologies
					</Heading>
					<UnorderedList spacing={2}>
						{technologies.map((v, i) => {
							return (
								<Flex key={i}>
									<ListItem>{v}</ListItem>
								</Flex>
							)
						})}
					</UnorderedList>
					<Box mt={5}>
						<Link target={'_blank'} href={githubUrl}>
							More info at github
						</Link>
					</Box>
					<NavButton mx={-1} my={5} onClick={() => router.push('/')} label={'<- back home'} />
				</Main>
			</DefaultLayout>
		</Box>
	)
}

export default ProjectLayout
