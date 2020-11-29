import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { ColorModeToggle } from 'components/ColorModeToggle'
import { Navbuttons } from 'components/NavButtons'
import { NavHeader } from 'components/NavHeader'
import React from 'react'

export const Nav: React.FC = ({ children }) => {
	const navbg = useColorModeValue('neonGreen.400', 'neonGreen.600')
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
			<NavHeader />
			<Navbuttons />
			<ColorModeToggle />
			{children}
		</Flex>
	)
}
