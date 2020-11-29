import React from 'react'
import { useColorMode, IconButton, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'

export const ColorModeToggle = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	const whichIcon = colorMode === 'dark' ? FaRegSun : FaRegMoon
	const iconColor = useColorModeValue('blue.800', 'yellow.300')
	const hoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	const icon = <Icon as={whichIcon} w={8} h={8} color={iconColor} />

	return (
		<IconButton
			mt={{ base: 2, md: 2 }}
			h={'100%'}
			icon={icon}
			aria-label={'color-mode-toggle'}
			onClick={toggleColorMode}
			bg={'inherit'}
			_focus={{ border: 'none' }}
			_hover={{ background: hoverBg }}
			p={2}
		/>
	)
}
