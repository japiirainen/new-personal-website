import DefaultLayout from './default'
import Head from 'next/head'
import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import { Main } from '_includes/Main'
import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'
import { NavButton } from 'components/NavButtons'
import router from 'next/router'

interface defaultLayoutIf {
	title: string
	slug: string
	image: string
	contents: string
	date: string
	readTime: string
}

const PostLayout: React.FC<defaultLayoutIf> = ({
	title,
	slug,
	contents,
	image,
	date,
	readTime,
}) => {
	const c = hydrate(contents)
	const mt = useBreakpointValue({ base: -150, md: -10 })
	return (
		<Box pb={200}>
			<Head>
				<title>{title}</title>
			</Head>
			<DefaultLayout title={title} description={slug}>
				<Main variant={'medium'}>
					<Flex mt={mt}>
						<NavButton onClick={() => router.push('/blog')} label={'<- Other blog posts'} />
					</Flex>
					<Flex justifyContent={'space-between'} h={5}>
						<Text fontFamily={'main'}>published:</Text>
						<Text fontFamily={'main'}>read time:</Text>
					</Flex>
					<Flex justifyContent={'space-between'}>
						<Text fontFamily={'main'}>{date}</Text>
						<Text fontFamily={'main'}>{readTime}</Text>
					</Flex>
					<Heading size={'lg'} mb={5} fontFamily={'main'}>
						{title}
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
						{c}
					</Box>
					<NavButton
						mx={-1}
						my={5}
						onClick={() => router.push('/blog')}
						label={'<- Other blog posts'}
					/>
				</Main>
			</DefaultLayout>
		</Box>
	)
}

export default PostLayout
