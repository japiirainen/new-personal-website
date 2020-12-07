import Head from 'next/head'
import { Nav } from '../_includes/Nav'
import { Footer } from '../_includes/Footer'
import { Box } from '@chakra-ui/react'
import { Main } from '_includes/Main'

interface defaultLayoutIf {
	title: string
	description: string
	pb?: number
}

const DefaultLayout: React.FC<defaultLayoutIf> = ({ description, title, pb, children }) => {
	return (
		<Box>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<Nav />
			<Main variant={'medium'} pb={pb}>
				{children}
			</Main>
			<Footer />
		</Box>
	)
}

export default DefaultLayout
