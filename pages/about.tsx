/* eslint-disable react/no-unescaped-entities */
import {
	chakra,
	Flex,
	Heading,
	Icon,
	ListIcon,
	ListItem,
	Text,
	UnorderedList,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react'
import DefaultLayout from '_layouts/default'
import { GrGolang, GrReactjs } from 'react-icons/gr'
import { IconType } from 'react-icons/lib'
import { FaDatabase, FaLanguage } from 'react-icons/fa'
import {
	IoLogoJavascript,
	IoLogoNodejs,
	IoIosBeer,
	IoIosBicycle,
	IoMdBaseball,
} from 'react-icons/io'
import {
	SiTypescript,
	SiHaskell,
	SiPython,
	SiKubernetes,
	SiRust,
	SiPostgresql,
	SiMongodb,
	SiElasticsearch,
	SiPurescript,
} from 'react-icons/si'
import { BiServer } from 'react-icons/bi'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { ImPencil2 } from 'react-icons/im'

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
	const linkColor = useColorModeValue('neonGreen.500', 'neonPurple.200')
	return (
		<>
			<Heading size={headingSize} fontFamily={'main'} textAlign={'center'}>
				About Joona...
			</Heading>
			<Text fontSize={20} fontFamily={'main'} mt={5}>
				Link to my awesome
				<chakra.a
					fontStyle={'italic'}
					color={linkColor}
					textDecoration={'underline'}
					href={'https://cv.japiirainen.com'}
					target={'_blank'}
					mx={2}
				>
					CV
				</chakra.a>
				made using Graphql
			</Text>
			<Flex mt={5} mb={20} pl={3} flexDirection={'column'} border={'1px'}>
				<Heading size={heading2Size} fontFamily={'main'} p={4}>
					Hobbies
					<Icon as={IoIosBicycle} />
				</Heading>
				<UnorderedList spacing={3} p={2}>
					<MyListItem
						label={'Working out'}
						desc={
							'As a former professional athele I`m still kind of addicted to working out. As time has gone on after I quit I have been getting a bit lazier all the time but I want to keep working out a part of my life for as long as I decide to spend time on this planet of ours.'
						}
						icon={IoMdBaseball}
					/>
					<MyListItem
						label={'Beer'}
						desc={
							'Huge fan of trying different kinds of beer. Only occasionally in larger doses :-). Even made an API for querying informaiton on all kinds of alcoholic beverages including beer.'
						}
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
				Tech skill I've acquired during my time developing software
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
							'I´m definitely not an Haskell expert but I have been studying it quite a bit recently. I think it´s a very interesting language and I would love to get better at it. I´m really starting to see the benefits from learning these functional languages and more importantly the ideas they bring to programming. These ideas can also be used with JavaScript and TypeScript to impreve the quality of the code I am writing.'
						}
						icon={SiHaskell}
					/>
					<MyListItem
						label={'PureScript'}
						desc={
							'I wanted an alternative for JavaScript or TypeScript for frontend applications. If you are not familiar with PureScript, it is semantically very similar to Haskell. It compiles to JavaScript which allows it to run on browsers.'
						}
						icon={SiPurescript}
					/>
					<MyListItem
						label={'Rust'}
						desc={
							'I wanted to try to learn a systems level programming language and Rust seemed like a cool choice. It is quite "functional programming" oriented and thats why I chose is over C and C++. I`ve built some small CLI:s with it and it seems like a good and super fast language for that. I have also planned to try it for some web development.'
						}
						icon={SiRust}
					/>
					<MyListItem
						label={'Python'}
						desc={
							'I´m not going to say much about Python. I´m not an expert but I have done some scripting with it. Seems like a good language for getting stuff done quickly.'
						}
						icon={SiPython}
					/>
					<MyListItem
						label={'Go'}
						desc={
							'Recently I started writing an api using go and I have to say that right now im absolutely loving it! The simplicity of the language is truly refreshing'
						}
						icon={GrGolang}
					/>
				</UnorderedList>
				<Heading size={heading2Size} fontFamily={'main'} p={4}>
					Databases <Icon as={FaDatabase} />
				</Heading>
				<UnorderedList spacing={3} p={2}>
					<MyListItem
						label={'PostgresSQL'}
						desc={
							'Postgres is propably the database I know the best. Although some people often talk smack about these classic sql dbs I think they are awesome!'
						}
						icon={SiPostgresql}
					/>
					<MyListItem
						label={'Mongodb'}
						desc={
							'At my previous job we used for mongodb for everything in the persistence layer and it was fine I guess. Don`t have much to say about this.'
						}
						icon={SiMongodb}
					/>
					<MyListItem
						label={'ElasticSearch'}
						desc={'Quite self explanitory. Good for searching stuff.'}
						icon={SiElasticsearch}
					/>
				</UnorderedList>
				<Heading size={heading2Size} fontFamily={'main'} p={4}>
					Frontend skills <Icon as={ImPencil2} />
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
