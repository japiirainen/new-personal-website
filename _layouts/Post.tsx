import DefaultLayout from './default'
import Head from 'next/head'
import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/react'
import { Main } from '_includes/Main'

interface defaultLayoutIf {
	title: string
	description: string
	contents: string
}

const PostLayout: React.FC<defaultLayoutIf> = ({ title, description, contents }) => {
	return (
		<Box>
			<Head>
				<title>{title}</title>
			</Head>
			<DefaultLayout title={title} description={description}>
				<Main variant={'medium'}>
					<Heading>{title}</Heading>
					<Box dangerouslySetInnerHTML={{ __html: contents }} />
					<Box>
						<Link href={'/'}>Home</Link>
					</Box>
				</Main>
			</DefaultLayout>
		</Box>
	)
}

export default PostLayout
