import DefaultLayout from './default'
import Head from 'next/head'
import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/react'

interface defaultLayoutIf {
	title: string
	description: string
	contents: string
}

const PostLayout: React.FC<defaultLayoutIf> = ({ title, description, contents }) => {
	return (
		<DefaultLayout title={title} description={description}>
			<Head>
				<title>{title}</title>
			</Head>
			<Heading>{title}</Heading>
			<Box dangerouslySetInnerHTML={{ __html: contents }} />
			<Box>
				<Link href={'/'}>Home</Link>
			</Box>
		</DefaultLayout>
	)
}

export default PostLayout
