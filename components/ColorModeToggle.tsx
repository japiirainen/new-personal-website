import React from 'react'
import { useColorMode, IconButton, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'

export const ColorModeToggle = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	const whichIcon = colorMode === 'dark' ? FaRegSun : FaRegMoon
	const iconColor = useColorModeValue('black', 'white')
	const iconHover = useColorModeValue('gray.500', 'gray.500')
	const icon = <Icon as={whichIcon} w={8} h={8} color={iconColor} _hover={{ color: iconHover }} />

	return (
		<IconButton
			mt={{ base: 2, md: 2 }}
			h={'100%'}
			icon={icon}
			aria-label={'color-mode-toggle'}
			onClick={toggleColorMode}
			bg={'inherit'}
			_focus={{ border: 'none' }}
			_hover={{ background: 'none', border: 'none' }}
			p={2}
		/>
	)
}
