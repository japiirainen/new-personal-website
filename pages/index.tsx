import { Box, Button, useColorMode } from '@chakra-ui/react'
import { getConfig } from '../api/index'
import DefaultLayout from '../_layouts/default'

interface indexIf {
	title: string
	description: string
}

const IndexPage: React.FC<indexIf> = ({ title, description }) => {
	const { toggleColorMode, colorMode } = useColorMode()

	return (
		<DefaultLayout title={title} description={description}>
			<Box>lol</Box>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>
		</DefaultLayout>
	)
}

export default IndexPage

export async function getStaticProps() {
	const config = await getConfig()
	return {
		props: {
			title: config.title,
			description: config.description,
		},
	}
}
