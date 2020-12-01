import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import router from 'next/router'

export const NavButton: React.FC<{ label: string; href: string; mx: number; my: number }> = ({
	label,
	href,
	mx,
	my,
}) => {
	const hoverBg = useColorModeValue('neonGreen.100', 'neonPurple.100')
	const bg = useColorModeValue('neonGreen.200', 'neonPurple.200')
	const hoverBorderColor = useColorModeValue('black', 'white')
	const buttonTextColor = useColorModeValue('black', 'white')
	return (
		<Button
			mx={mx}
			my={my}
			style={{ borderRadius: 0 }}
			bg={bg}
			_hover={{
				background: hoverBg,
				color: 'black',
				border: '2px',
				borderColor: hoverBorderColor,
			}}
			color={buttonTextColor}
			onClick={() => router.push(href)}
			fontFamily={'main'}
		>
			{label}
		</Button>
	)
}

export const Navbuttons = () => {
	return (
		<Box mt={3}>
			<NavButton mx={1} my={0} label={'Blog'} href={'/blog'} />
			<NavButton mx={1} my={0} label={'About me'} href={'/about'} />
			<NavButton mx={1} my={0} label={'Contact'} href={'/contact'} />
		</Box>
	)
}
