import Head from 'next/head'
import { Box, Button, useColorMode } from '@chakra-ui/react'

const IndexPage: React.FC = () => {
	const { toggleColorMode, colorMode } = useColorMode()

	return (
		<>
			<Head>
				<title>Joona Piirainen</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box>lol</Box>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>
		</>
	)
}

export default IndexPage
