import { Flex, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { ColorModeToggle } from 'components/ColorModeToggle'
import { Navbuttons } from 'components/NavButtons'
import { NavHeader } from 'components/NavHeader'
import React from 'react'

const NavContent = () => {
	const navItems = useBreakpointValue({
		base: (
			<Flex direction={'column'} w={'100%'}>
				<Flex direction={'row'} justifyContent={'space-between'}>
					<NavHeader />
					<ColorModeToggle />
				</Flex>
				<Flex justify={'center'} mb={2}>
					<Navbuttons />
				</Flex>
			</Flex>
		),
		md: (
			<>
				<NavHeader />
				<Navbuttons />
				<ColorModeToggle />
			</>
		),
	})
	return <>{navItems}</>
}

export const Nav: React.FC = ({ children }) => {
	const navbg = useColorModeValue('neonGreen.400', 'neonPurple.300')
	return (
		<Flex
			as={'nav'}
			w={'100%'}
			h={'auto'}
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
			<NavContent />
			{children}
		</Flex>
	)
}
