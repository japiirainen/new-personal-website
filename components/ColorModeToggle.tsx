import React from 'react'
import { useColorMode, IconButton, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaMoon, FaRegSun } from 'react-icons/fa'

export const ColorModeToggle = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	const whichIcon = colorMode === 'dark' ? FaRegSun : FaMoon
	const iconColor = useColorModeValue('blue.800', 'yellow.300')
	const icon = <Icon as={whichIcon} w={12} h={12} color={iconColor} />

	return (
		<IconButton
			h={'100%'}
			icon={icon}
			aria-label={'color-mode-toggle'}
			onClick={toggleColorMode}
			style={{ background: 'none' }}
			_focus={{ border: 'none' }}
		/>
	)
}
