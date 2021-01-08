import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

type mainVariant = 'narrow' | 'medium' | 'wide'

interface mainProps {
	variant: mainVariant
	pb?: number
}

export const Main: React.FC<mainProps> = ({ variant, pb = 0, children }) => {
	const mainBg = useColorModeValue('white', 'black')
	return (
		<Box
			pt={{ base: 40, md: 20 }}
			mx={'auto'}
			maxW={variant === 'narrow' ? '400px' : variant === 'medium' ? '800px' : '1200px'}
			w={'95%'}
			h={'auto'}
			minH={'100vh'}
			bg={mainBg}
			pb={pb}
		>
			{children}
		</Box>
	)
}
