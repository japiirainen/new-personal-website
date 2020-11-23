import Head from 'next/head'
import { Header } from '../_includes/header'
import { Footer } from '../_includes/Footer'

interface defaultLayoutIf {
	title: string
	description: string
}

const DefaultLayout: React.FC<defaultLayoutIf> = ({ description, title, children }) => {
	return (
		<main>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<Header />
			{children}
			<Footer />
		</main>
	)
}

export default DefaultLayout
