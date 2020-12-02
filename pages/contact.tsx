import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Textarea,
	useBreakpointValue,
	Box,
} from '@chakra-ui/react'
import { NavButton } from 'components/NavButtons'
import { Formik, Form, Field } from 'formik'
import Image from 'next/image'
import React from 'react'
import DefaultLayout from '_layouts/default'

const imageUrl =
	'https://images.unsplash.com/photo-1581022788558-2ffc54ee2b99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'

const ContactPage: React.FC = () => {
	return (
		<DefaultLayout title={'contact page'} description={'page for getting in touch with me '}>
			<Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
				<Heading mb={10} fontFamily={'main'}>
					Get in touch with me!
				</Heading>
				<ContactForm />
			</Flex>
			<Box pb={200}>
				<Image src={imageUrl} layout={'responsive'} height={200} width={300} />
			</Box>
		</DefaultLayout>
	)
}

const ContactForm: React.FC = () => {
	const formW = useBreakpointValue({ base: '100%', md: '90%' })
	function validateName(value) {
		let error
		if (!value) {
			error = 'Name is required'
		} else if (value !== 'Naruto') {
			error = 'Jeez! You´re not a fan 😱'
		}
		return error
	}

	return (
		<Formik
			initialValues={{ email: '', name: '' }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					actions.setSubmitting(false)
				}, 1000)
			}}
		>
			{props => (
				<Form style={{ width: formW }}>
					<Field name="message" validate={validateName}>
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
									resize={'horizontal'}
								/>
								<FormErrorMessage>{form.errors.message}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Flex>
						<Field name="email" validate={validateName}>
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
						<Field name="name" validate={validateName}>
							{({ field, form }) => (
								<FormControl isInvalid={form.errors.name && form.touched.name}>
									<FormLabel htmlFor="name" fontFamily={'main'}>
										First name
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
