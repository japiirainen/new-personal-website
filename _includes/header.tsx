import { Flex, Link } from '@chakra-ui/react'

export const Header: React.FC = () => {
	return (
		<Flex>
			<Link>blog</Link>
			<Link>about me</Link>
			<Link>projects</Link>
		</Flex>
	)
}
