import { Heading } from '@chakra-ui/react'
import Image from 'next/image'
import DefaultLayout from '_layouts/default'

const ContactPage: React.FC = () => {
	return (
		<DefaultLayout description={'about me'} title={'about'}>
			<Image
				src={
					'https://images.unsplash.com/photo-1509828945144-552b3b1a968d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80'
				}
				layout={'fill'}
			/>
		</DefaultLayout>
	)
}

export default ContactPage
