import { Flex, Heading, Icon, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { ColorModeToggle } from 'components/ColorModeToggle'
import React from 'react'
import { Gi3DGlasses } from 'react-icons/gi'

const NavIcon = () => <Icon as={Gi3DGlasses} mb={2} mr={2} />

export const Nav: React.FC = ({ children }) => {
	const navbg = useColorModeValue('#39FF14', '#1CB200')
	return (
		<Flex
			as={'nav'}
			w={'100%'}
			h={'4rem'}
			minH={'4rem'}
			rounded={'sm'}
			justifyContent={'space-between'}
			wrap={'wrap'}
			zIndex={200}
			position={'absolute'}
			top={0}
			bg={navbg}
			boxSizing={'content-box'}
			style={{ boxShadow: '0 1px 2px 0 #bababa' }}
			borderBottom={'1px'}
			borderBottomColor={'black'}
		>
			<Heading mt={3} mx={3} size={'lg'} fontFamily={'navHeader'}>
				<NavIcon />
				Joona Piirainen
			</Heading>
			<ColorModeToggle />
			{children}
		</Flex>
	)
}
