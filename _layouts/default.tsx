import Head from 'next/head'
import { Nav } from '../_includes/Nav'
import { Footer } from '../_includes/Footer'
import { Box } from '@chakra-ui/react'
import { Main } from '_includes/Main'

interface defaultLayoutIf {
	title: string
	description: string
}

const DefaultLayout: React.FC<defaultLayoutIf> = ({ description, title, children }) => {
	return (
		<Box>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<Nav />
			<Main variant={'medium'}>{children}</Main>
			<Footer />
		</Box>
	)
}

export default DefaultLayout
