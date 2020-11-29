import { Flex, Text, Link as ChakraLink, Icon, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ImInstagram, ImGithub, ImTwitter, ImLinkedin2 } from 'react-icons/im'
import { config } from 'api'

const FooterLinks: React.FC = () => {
	return (
		<Flex direction={'row'} justifyContent={{ base: 'center', md: 'flex-start' }} mb={2}>
			<ChakraLink mx={2} fontFamily={'main'} fontSize={20}>
				<NextLink href={'/blog'}>
					<a>blog</a>
				</NextLink>
			</ChakraLink>
			<ChakraLink mx={1} fontFamily={'main'} fontSize={20}>
				<NextLink href={'/about'}>
					<a>about me</a>
				</NextLink>
			</ChakraLink>
			<ChakraLink mx={2} fontFamily={'main'} fontSize={20}>
				<NextLink href={'/contact'}>
					<a>contact</a>
				</NextLink>
			</ChakraLink>
		</Flex>
	)
}
const SocialIcon: React.FC<{ as }> = ({ as }) => <Icon as={as} w={8} h={8} mx={2} />

const FooterSocials: React.FC = () => {
	const {
		socials: { github, instagram, linkedin, twitter },
	} = config
	return (
		<>
			<NextLink href={github}>
				<a target={'_blank'}>
					<SocialIcon as={ImGithub} />
				</a>
			</NextLink>
			<NextLink href={instagram}>
				<a target={'_blank'}>
					<SocialIcon as={ImInstagram} />
				</a>
			</NextLink>
			<NextLink href={twitter}>
				<a target={'_blank'}>
					<SocialIcon as={ImTwitter} />
				</a>
			</NextLink>
			<NextLink href={linkedin}>
				<a target={'_blank'}>
					<SocialIcon as={ImLinkedin2} />
				</a>
			</NextLink>
		</>
	)
}

export const Footer: React.FC = () => {
	const footerColor = useColorModeValue('gray.100', 'neonPurple.200')
	return (
		<Flex
			as={'footer'}
			position={'absolute'}
			bottom={0}
			h={{ base: 120, md: 100 }}
			borderTop={'1px'}
			w={'100%'}
			alignItems={'center'}
			direction={{ base: 'column-reverse', md: 'row' }}
			pb={2}
			bg={footerColor}
			justifyContent={'space-around'}
		>
			<Flex
				direction={'column'}
				alignContent={{ base: 'center' }}
				mr={'auto'}
				ml={{ base: 'auto', md: 2 }}
			>
				<FooterLinks />
				<Text fontFamily={'main'} fontSize={{ base: 'sm', md: 'md' }}>
					© 2020 Joona Piirainen All Rights Reserved
				</Text>
			</Flex>
			<Flex
				ml={'auto'}
				mt={{ base: 2, md: 0 }}
				mr={{ base: 'auto', md: 2 }}
				alignContent={{ base: 'center' }}
			>
				<FooterSocials />
			</Flex>
		</Flex>
	)
}
