import React from 'react'
import { useColorMode, IconButton, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'

export const ColorModeToggle = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	const whichIcon = colorMode === 'dark' ? FaRegSun : FaRegMoon
	const hoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	const hoverBorderColor = useColorModeValue('black', 'white')
	const icon = <Icon as={whichIcon} w={8} h={8} color={'red.200'} />

	return (
		<IconButton
			mt={{ base: 2, md: 2 }}
			h={'100%'}
			icon={icon}
			aria-label={'color-mode-toggle'}
			onClick={toggleColorMode}
			bg={'inherit'}
			_focus={{ border: 'none' }}
			_hover={{ background: hoverBg, border: '0px', borderColor: hoverBorderColor }}
			p={2}
		/>
	)
}
