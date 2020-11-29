import { Flex, Text, Link as ChakraLink, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ImInstagram, ImGithub, ImTwitter, ImLinkedin2 } from 'react-icons/im'
import { config } from 'api'

const FooterNextLinks: React.FC = () => {
	return (
		<Flex direction={'row'}>
			<ChakraLink mx={2} fontFamily={'main'} fontSize={18}>
				<NextLink href={'/blog'}>
					<a>blog</a>
				</NextLink>
			</ChakraLink>
			<ChakraLink mx={2} fontFamily={'main'} fontSize={18}>
				<NextLink href={'/about'}>
					<a>about me</a>
				</NextLink>
			</ChakraLink>
			<ChakraLink mx={2} fontFamily={'main'} fontSize={18}>
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
	return (
		<Flex
			as={'footer'}
			position={'absolute'}
			bottom={0}
			h={100}
			borderTop={'1px'}
			w={'100%'}
			justifyContent={'space-between'}
			alignItems={'center'}
		>
			<Flex direction={'column'} mr={'auto'} ml={2}>
				<Text fontFamily={'main'}>© 2020 Joona Piirainen All Rights Reserved</Text>
				<FooterNextLinks />
			</Flex>
			<Flex ml={'auto'} mr={2}>
				<FooterSocials />
			</Flex>
		</Flex>
	)
}
