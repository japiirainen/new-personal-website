import DefaultLayout from './default'
import Head from 'next/head'
import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import { Main } from '_includes/Main'
import Image from 'next/image'
import { NavButton } from 'components/NavButtons'
import router from 'next/router'
import { projectDataIf } from 'api'

const ProjectLayout: React.FC<projectDataIf> = ({
	githubUrl,
	id,
	image,
	name,
	publiUrl,
	smallDesc,
}) => {
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
					</Flex>
					<Heading size={'lg'} mb={5} fontFamily={'main'}>
						{name}
					</Heading>
					TODO
					<Image src={image} layout={'responsive'} height={'60px'} width={'100%'} />
					<NavButton mx={-1} my={5} onClick={() => router.push('/')} label={'<- back home'} />
				</Main>
			</DefaultLayout>
		</Box>
	)
}

export default ProjectLayout
