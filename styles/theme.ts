import { extendTheme } from '@chakra-ui/react'

type colorModeT = { colorMode: 'dark' } | { colorMode: 'light' }

const styles = {
	global: ({ colorMode }: colorModeT) => ({
		'html, body': {
			bg: colorMode === 'dark' ? 'gray.900' : 'white',
		},
	}),
}

const config = {
	useSystemColorMode: false,
	initialColorMode: 'light',
}

const colors = {
	neonGreen: {
		100: '#9AFF87',
		200: '#79FF60',
		300: '#59FF3A',
		400: '#39FF14',
		500: '#22D900',
		600: '#1CB200',
		700: '#168C00',
	},
	neonPurple: {
		100: '#fbf8fd',
		200: '#ab20fd',
		300: '#7d12ff',
		400: '#200589',
		500: '#000000',
	},
}

const fonts = {
	navHeader: 'Roboto Mono, monospace',
	main: 'Ubuntu, monospace',
}

export const theme = extendTheme({ config, styles, fonts, colors })
