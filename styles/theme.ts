import { extendTheme } from '@chakra-ui/react'

type colorModeT = { colorMode: 'dark' } | { colorMode: 'light' }

const styles = {
	global: ({ colorMode }: colorModeT) => ({
		'html, body': {
			bg: colorMode === 'dark' ? 'gray.800' : 'white',
		},
	}),
}

const config = {
	useSystemColorMode: false,
	initialColorMode: 'light',
}

const fonts = {
	navHeader: 'Roboto Mono, monospace',
	main: 'Ubuntu, monospace',
}

export const theme = extendTheme({ config, styles, fonts })
