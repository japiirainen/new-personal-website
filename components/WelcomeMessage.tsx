import React from 'react'
import { Avatar, Flex, Text, useColorModeValue, chakra } from '@chakra-ui/react'
import { config } from 'api'

export const WelcomeMessage: React.FC = () => {
	const linkColor = useColorModeValue('neonGreen.500', 'neonPurple.200')
	return (
		<>
			<Flex justifyContent={'flex-start'} p={3} mt={10} mb={20}>
				<Avatar
					size={'lg'}
					src={'https://s3.eu-north-1.amazonaws.com/japiirainen.com/joonabwnobg.jpg'}
				/>
				<Flex direction={{ base: 'column', md: 'row' }}>
					<Flex
						ml={5}
						alignContent={'center'}
						justifyContent={'center'}
						flexDirection={'column'}
					>
						<Text fontFamily={'main'}>
							Personal website by{' '}
							<chakra.a
								fontStyle={'italic'}
								color={linkColor}
								textDecoration={'underline'}
								href={config.socials.github}
								target={'_blank'}
							>
								Joona Piirainen
							</chakra.a>
						</Text>
						<Text fontFamily={'main'}>All things tech related</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
