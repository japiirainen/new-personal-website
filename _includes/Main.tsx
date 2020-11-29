import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

type mainVariant = 'narrow' | 'medium' | 'wide'

interface mainProps {
	variant: mainVariant
}

export const Main: React.FC<mainProps> = ({ variant, children }) => {
	const mainBg = useColorModeValue('white', 'gray.900')
	return (
		<Box
			pt={{ base: 40, md: 20 }}
			mx={'auto'}
			maxW={variant === 'narrow' ? '400px' : variant === 'medium' ? '800px' : '1200px'}
			w={'100%'}
			h={'100%'}
			minH={'100vh'}
			bg={mainBg}
		>
			{children}
		</Box>
	)
}
