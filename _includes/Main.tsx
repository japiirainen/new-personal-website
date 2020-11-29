import React from 'react'
import { Box } from '@chakra-ui/react'

type mainVariant = 'narrow' | 'medium' | 'wide'

interface mainProps {
	variant: mainVariant
}

export const Main: React.FC<mainProps> = ({ variant, children }) => {
	return (
		<Box
			pt={20}
			mx={'auto'}
			maxW={variant === 'narrow' ? '400px' : variant === 'medium' ? '800px' : '1200px'}
			w={'100%'}
		>
			{children}
		</Box>
	)
}
