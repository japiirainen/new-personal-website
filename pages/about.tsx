import {
	Flex,
	Heading,
	Icon,
	ListIcon,
	ListItem,
	Text,
	UnorderedList,
	useBreakpointValue,
} from '@chakra-ui/react'
import DefaultLayout from '_layouts/default'
import { GrBrush, GrReactjs } from 'react-icons/gr'
import { IconType } from 'react-icons/lib'
import { FaLanguage } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoNodejs, IoIosBeer, IoIosBicycle } from 'react-icons/io'
import { SiTypescript, SiHaskell, SiClojure, SiPython, SiKubernetes } from 'react-icons/si'
import { BiServer } from 'react-icons/bi'
import { AiOutlineCloudServer } from 'react-icons/ai'

const MyListItem: React.FC<{ label: string; icon: IconType; desc: string }> = ({
	label,
	icon,
	desc,
}) => {
	return (
		<ListItem fontFamily={'main'} fontSize={18}>
			{label}
			<ListIcon as={icon} ml={3} />
			<Text fontSize={15} fontStyle={'italic'}>
				{desc}
			</Text>
		</ListItem>
	)
}

const PersonalInfo: React.FC = () => {
	const headingSize = useBreakpointValue({ base: 'md', md: 'lg' })
	const heading2Size = useBreakpointValue({ base: 'sm', md: 'md' })
	return (
		<>
			<Heading size={headingSize} fontFamily={'main'} textAlign={'center'}>
				About Joona...
			</Heading>
			<Flex my={5} flexDirection={'column'} border={'1px'}>
				<Heading size={heading2Size} fontFamily={'main'} p={4}>
					Hobbies
					<Icon as={IoIosBicycle} />
				</Heading>
				<UnorderedList spacing={3} p={2}>
					<MyListItem
						label={'Drinking beer'}
						desc={'This is my favorite hobby'}
						icon={IoIosBeer}
					/>
				</UnorderedList>
			</Flex>
		</>
	)
}

const ContactPage: React.FC = () => {
	const headingSize = useBreakpointValue({ base: 'md', md: 'lg' })
	const heading2Size = useBreakpointValue({ base: 'sm', md: 'md' })
	return (
		<DefaultLayout description={'about me'} title={'about'} pb={200}>
			<PersonalInfo />
			<Heading size={headingSize} fontFamily={'main'} textAlign={'center'}>
				Tech skill I have acquired during my time developing software
			</Heading>
			<Flex mt={5} pl={3} flexDirection={'column'} border={'1px'}>
				<Heading size={heading2Size} fontFamily={'main'} p={4}>
					Programming languages <Icon as={FaLanguage} />
				</Heading>
				<UnorderedList spacing={3} p={2}>
					<MyListItem
						label={'TypeScript'}
						desc={
							'This is the language im mostly using these days. I build pretty much all my projects using TypeScript and i also use if daily at work. I think TypeScript is a nice addition over JavaScript but definitely has some flaws. Especially since I`m big fan of functional programming and that is unfortunately not the easiest thing with TypeScript.'
						}
						icon={SiTypescript}
					/>
					<MyListItem
						label={'JavaScript'}
						desc={
							'Currently im not using JavaScript very much since I´m using TypeScript. JavaScript was the first language I learned so it will always be special for me for that reason. I also thing you can do some cool FP using JavaScript!'
						}
						icon={IoLogoJavascript}
					/>
					<MyListItem
						label={'Haskell'}
						desc={
							'Ok, so I´m definitely not an Haskell expert but I have been studying it quite a bit resently. I think it´s a very interesting language and I would love to get better at it.'
						}
						icon={SiHaskell}
					/>
					<MyListItem
						label={'Clojure'}
						desc={
							'I´m trying to pick up clojure since I love FP and I think it might be a bit more practical than Haskell and theres a lot more jobs in Clojure. But I think theres some super intelligent peaple behind the language Clojure and it seems like quite an amazing language.'
						}
						icon={SiClojure}
					/>
					<MyListItem
						label={'Python'}
						desc={
							'I´m not going to say much about Python. I´m not an expert but I have done some scripting with it. Seems like a good language for getting stuff done quickly.'
						}
						icon={SiPython}
					/>
				</UnorderedList>
				<Heading size={heading2Size} fontFamily={'main'} p={4}>
					Frontend skills <Icon as={GrBrush} />
				</Heading>
				<UnorderedList spacing={3} p={2}>
					<MyListItem
						label={'React.js'}
						desc={
							'This is where most of my frontend knowledge is! I have developed multiple applications using React and so far I have loved it. I´m also quite familiar with popular technologies inside the React ecosystem as for example Redux, Emotion, and a couple of UI component libraries including Chakra-ui and Material-ui.'
						}
						icon={GrReactjs}
					/>
				</UnorderedList>
				<Heading size={heading2Size} fontFamily={'main'} p={4}>
					Backend skills <Icon as={BiServer} />
				</Heading>
				<UnorderedList spacing={3} p={2}>
					<MyListItem
						label={'NodeJs'}
						desc={
							'NodeJs is the only serverside technology I have used but I have really liked it. It´s quite nice to be able to develop both bacend and frontend apps with the same language!'
						}
						icon={IoLogoNodejs}
					/>
				</UnorderedList>
				<Heading size={heading2Size} fontFamily={'main'} p={4}>
					DevOps skills <Icon as={AiOutlineCloudServer} />
				</Heading>
				<UnorderedList spacing={3} p={2}>
					<MyListItem
						label={'Kubernetes'}
						desc={
							'Im still a big noob in this space but I´m trying to get better. I actually moved all my personal stuff to a kubernetes cluster and it seems really cool!'
						}
						icon={SiKubernetes}
					/>
				</UnorderedList>
			</Flex>
		</DefaultLayout>
	)
}

export default ContactPage
