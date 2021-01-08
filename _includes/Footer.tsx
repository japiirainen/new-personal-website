import { Flex, Text, Link as ChakraLink, Icon, useColorModeValue, chakra } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ImInstagram, ImGithub, ImTwitter, ImLinkedin2 } from 'react-icons/im'
import { config } from 'api'

const FooterLinks: React.FC = () => {
	return (
		<Flex direction={'row'} justifyContent={{ base: 'center', md: 'flex-start' }} mb={2}>
			<ChakraLink>
				<NextLink href={'/blog'}>
					<chakra.a fontFamily={'main'} fontSize={20} mx={2}>
						blog
					</chakra.a>
				</NextLink>
			</ChakraLink>
			<ChakraLink>
				<NextLink href={'/about'}>
					<chakra.a fontFamily={'main'} fontSize={20} mx={2}>
						about me
					</chakra.a>
				</NextLink>
			</ChakraLink>
			<ChakraLink>
				<NextLink href={'/contact'}>
					<chakra.a fontFamily={'main'} fontSize={20} mx={2}>
						contact
					</chakra.a>
				</NextLink>
			</ChakraLink>
		</Flex>
	)
}
export const SocialIcon: React.FC<{ as }> = ({ as }) => <Icon as={as} w={8} h={8} mx={2} />

const FooterSocials: React.FC = () => {
	const socialIconColor = useColorModeValue('black', 'white')
	const socialIconHoverColor = useColorModeValue('GrayText', 'neonPurple.200')
	const {
		socials: { github, instagram, linkedin, twitter },
	} = config
	return (
		<>
			<chakra.a
				href={github}
				_hover={{ color: socialIconHoverColor, cursor: 'pointer' }}
				target={'_blank'}
				color={socialIconColor}
			>
				<SocialIcon as={ImGithub} />
			</chakra.a>
			<chakra.a
				href={instagram}
				_hover={{ color: socialIconHoverColor, cursor: 'pointer' }}
				target={'_blank'}
				color={socialIconColor}
			>
				<SocialIcon as={ImInstagram} />
			</chakra.a>
			<chakra.a
				href={twitter}
				_hover={{ color: socialIconColor, cursor: 'pointer' }}
				target={'_blank'}
				color={socialIconColor}
			>
				<SocialIcon as={ImTwitter} />
			</chakra.a>
			<chakra.a
				href={linkedin}
				_hover={{ color: socialIconHoverColor, cursor: 'pointer' }}
				target={'_blank'}
				color={socialIconColor}
			>
				<SocialIcon as={ImLinkedin2} />
			</chakra.a>
		</>
	)
}

export const Footer: React.FC = () => {
	const footerColor = useColorModeValue('gray.100', 'black')
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
				<Text ml={2} fontFamily={'main'} fontSize={{ base: 'sm', md: 'md' }}>
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
