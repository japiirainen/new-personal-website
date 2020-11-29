import { border, Box, Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import router from 'next/router'

const NavButton: React.FC<{ label: string; href: string }> = ({ label, href }) => {
	const hoverBg = useColorModeValue('neonGreen.100', 'neonGreen.200')
	const buttonTextColor = useColorModeValue('black', 'white')
	return (
		<Button
			mx={1}
			border={'1px'}
			borderColor={'black'}
			bg={'inherit'}
			_hover={{ background: hoverBg }}
			color={buttonTextColor}
			onClick={() => router.push(href)}
		>
			{label}
		</Button>
	)
}

export const Navbuttons = () => {
	return (
		<Box mt={3}>
			<NavButton label={'Blog'} href={'/blog'} />
			<NavButton label={'About me'} href={'/about'} />
			<NavButton label={'Contact'} href={'/contact'} />
		</Box>
	)
}
