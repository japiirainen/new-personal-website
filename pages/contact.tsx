import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Textarea,
	Icon,
	Box,
	Text,
} from '@chakra-ui/react'
import { NavButton } from 'components/NavButtons'
import { Formik, Form, Field } from 'formik'
import Image from 'next/image'
import React, { useState } from 'react'
import DefaultLayout from '_layouts/default'
import { sendContactEmail } from 'api'
import { BsCheckAll } from 'react-icons/bs'

const imageUrl =
	'https://images.unsplash.com/photo-1581022788558-2ffc54ee2b99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'

const ContactPage: React.FC = () => {
	const [done, setDone] = useState(false)
	return (
		<DefaultLayout title={'contact page'} description={'page for getting in touch with me '}>
			<Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
				<Heading mb={10} fontFamily={'main'} fontSize={{ base: 25, md: 35 }}>
					{done ? 'Feel free to send more messages ;-)' : 'Get in touch with me!'}
				</Heading>
				<ContactForm done={done} setDone={setDone} />
			</Flex>
			<Box pb={200}>
				<Image src={imageUrl} layout={'responsive'} height={200} width={300} />
			</Box>
		</DefaultLayout>
	)
}

const validateField = fieldName => value => {
	if (!value) {
		return `${fieldName} is required`
	}
}

interface ContactForm {
	done: boolean
	setDone: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactForm: React.FC<ContactForm> = ({ done, setDone }) => {
	if (done) {
		return (
			<Flex
				direction={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				h={240}
				border={'1px'}
				mb={20}
				px={5}
			>
				<Flex>
					<Heading>Thanks for contacting!</Heading>
					<Icon as={BsCheckAll} w={42} h={42} ml={2} color={'neonGreen.300'} />
				</Flex>
				<Text fontSize={18} pt={5}>
					I will get back to you as soon as possible
				</Text>
			</Flex>
		)
	}

	return (
		<Formik
			initialValues={{ email: '', name: '' }}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			onSubmit={({ message, email, name }, actions) => {
				sendContactEmail(message, email, name)
					.finally(() => {
						setDone(true)
						actions.setSubmitting(false)
					})
					.catch(console.error)
			}}
		>
			{props => (
				<Form style={{ width: '100%', height: 260, zIndex: 200 }}>
					<Field name="message">
						{({ field, form }) => (
							<FormControl isInvalid={form.errors.message && form.touched.message}>
								<FormLabel htmlFor="message" fontFamily={'main'}>
									message
								</FormLabel>
								<Textarea
									{...field}
									id="message"
									placeholder="Here is a sample placeholder"
									size="lg"
								/>
								<FormErrorMessage>{form.errors.message}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Flex>
						<Field name="email" validate={validateField('Email')}>
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.email && form.touched.email}>
									<FormLabel htmlFor="email" fontFamily={'main'}>
										Email
									</FormLabel>
									<Input {...field} id="email" placeholder="email" />
									<FormErrorMessage>{form.errors.email}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
						<Field name="name" validate={validateField('Name')}>
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.name && form.touched.name}>
									<FormLabel htmlFor="name" fontFamily={'main'}>
										Your name
									</FormLabel>
									<Input {...field} id="name" placeholder="name" />
									<FormErrorMessage>{form.errors.name}</FormErrorMessage>
								</FormControl>
							)}
						</Field>
					</Flex>
					<NavButton my={4} type="submit" label={'contact me'} loading={props.isSubmitting} />
				</Form>
			)}
		</Formik>
	)
}

export default ContactPage
