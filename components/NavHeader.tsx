import { Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Gi3DGlasses } from 'react-icons/gi'

const NavIcon = () => <Icon as={Gi3DGlasses} mb={2} mr={2} />

export const NavHeader: React.FC = () => {
	const navheaderColor = useColorModeValue('black', 'neonPurple.100')
	return (
		<Link href={'/'}>
			<a>
				<Heading
					mt={3}
					mx={3}
					fontSize={{ base: '1.8rem', md: '2rem' }}
					fontFamily={'navHeader'}
					color={navheaderColor}
				>
					<NavIcon />
					Joona Piirainen
				</Heading>
			</a>
		</Link>
	)
}
