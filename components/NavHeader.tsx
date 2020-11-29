import { Heading, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Gi3DGlasses } from 'react-icons/gi'

const NavIcon = () => <Icon as={Gi3DGlasses} mb={2} mr={2} />

export const NavHeader: React.FC = () => {
	return (
		<Link href={'/'}>
			<a>
				<Heading mt={3} mx={3} size={'lg'} fontFamily={'navHeader'} color={'black'}>
					<NavIcon />
					Joona Piirainen
				</Heading>
			</a>
		</Link>
	)
}
