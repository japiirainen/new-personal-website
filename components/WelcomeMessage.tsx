import React from 'react'
import {
	Heading,
	Avatar,
	Flex,
	Text,
	useColorModeValue,
	Divider,
	useBreakpoint,
} from '@chakra-ui/react'

export const WelcomeMessage: React.FC = () => {
	const hoverBg = useColorModeValue('neonGreen.100', 'neonPurple.200')
	const bp = useBreakpoint()
	return (
		<>
			<Heading fontFamily={'main'} textAlign={'center'}>
				Welcome to my website!
			</Heading>
			<Flex
				justifyContent={'flex-start'}
				p={3}
				my={10}
				border={'1px'}
				borderColor={'gray.300'}
				_hover={{ border: '2px', borderColor: hoverBg }}
			>
				<Avatar
					size={'lg'}
					src={
						'https://s3.eu-north-1.amazonaws.com/japiirainen.com/F9A7812E-DF18-4890-9864-4C99E16E106B.jpeg'
					}
				/>
				<Flex direction={{ base: 'column', md: 'row' }}>
					<Flex
						ml={5}
						alignContent={'center'}
						justifyContent={'center'}
						flexDirection={'column'}
					>
						<Text fontFamily={'main'}>Joona Piirainen</Text>
						<Text fontFamily={'main'}>22 year old Software Engineer</Text>
					</Flex>
					{bp === 'sm' && <Divider mt={10} />}
					<Flex
						ml={5}
						alignContent={'center'}
						justifyContent={'center'}
						flexDirection={'column'}
						mt={{ base: 5, md: 0 }}
					>
						<Text fontFamily={'main'}>On this website you´ll find..</Text>
						<Text fontFamily={'main'}>My blog and other stuff created by yours truly</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
