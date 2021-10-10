import matter from 'gray-matter'
export interface configIf {
	title: string
	description: string
	socials: {
		github: string
		instagram: string
		twitter: string
		linkedin: string
	}
}

export const config: configIf = {
	title: 'Joona Piirainen Blog',
	description: 'foo bar',
	socials: {
		github: 'https://github.com/japiirainen',
		instagram: 'https://instagram.com/japiirainen',
		twitter: 'https://twitter.com/japiirainen',
		linkedin: 'https://www.linkedin.com/in/joona-piirainen-a026351a8/',
	},
}

export interface projectDataIf {
	id: number
	name: string
	publiUrl?: string
	githubUrl: string
	npmUrl?: string
	image: string
	smallDesc: string
	description: string
	technologies: Array<string>
}

export const projectData: Array<projectDataIf> = [
	{
		id: 1,
		name: 'Js-Quiz',
		githubUrl: 'https://github.com/japiirainen/js-quiz',
		publiUrl: 'https://js-quiz.me',
		smallDesc: 'Website for learning JavaScript...',
		image: 'https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
		description:
			'A website for playing around with javascript. More info at the projects github repo!',
		technologies: ['Typescript', 'Nodejs', 'Reactjs', 'Urql', 'Graphql', 'MongoDb', 'Docker'],
	},
	{
		id: 2,
		name: 'Oluet-api',
		githubUrl: 'https://github.com/japiirainen/go-oluet-api',
		publiUrl: 'https://oluet-api.xyz',
		smallDesc: 'API for querying beer...',
		image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
		description: `Have you ever wanted to search through Alko's expansive back catalogue of beer and other drinks in a programmatic way? Maybe build a tool that pairs drinks with food? Or maybe just try to find beer an abv of more than 5% Well now you can finally do that!

		Oluet API takes Alko's catalogue and makes it searchable through an Graphql endpoint! And on top of all that it's completely free and open source!

		But that's not where the fun stops :-). Oluet API also takes collects the pricehistory for all the products in Alko's selection and makes it possible to query past and current prices easily!`,
		technologies: ['Go', 'Graphql', 'Postgres', 'Docker'],
	},
	{
		id: 3,
		name: 'Var-lib-showcase',
		githubUrl: 'https://github.com/japiirainen/var-lib-dpkg-status-showcase',
		publiUrl: 'https://reactor-pre-assignment.herokuapp.com/',
		smallDesc: 'Coding challenge by Reaktor...',
		image: 'https://s3.eu-north-1.amazonaws.com/japiirainen.com/Screenshot+2020-12-14+at+19.22.41.png',
		description:
			'Simple websote for showcasing the linux filesystem hierarchy standard called var-lib-dpkg-status.',
		technologies: ['Nodejs', 'Express'],
	},
	{
		id: 4,
		name: 'Generate-config',
		githubUrl: 'https://github.com/japiirainen/generate-config',
		npmUrl: 'https://www.npmjs.com/package/generate-config',
		smallDesc: 'Small CLI for genarating boilerplate code...',
		image: 'https://images.unsplash.com/photo-1490557162706-284736f48784?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
		description: 'Package for generating "boilerplaty" configs.',
		technologies: ['NodeJs'],
	},
]

export const getAllPosts = async () => {
	const res = await fetch('https://api.github.com/users/japiirainen/gists', {
		headers: {
			authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
		},
	})
	const data = await res.json()
	const files: {
		[filename: string]: {
			filename: string
			raw_url: string
			type: string
			language: string
			size: number
		}
	}[] = data.map(v => ({ ...v.files, id: v.id }))

	const blogGists = files.flatMap(obj => {
		const [filename, metadata] = Object.entries(obj)[0]
		if (filename.includes('.mdx')) {
			return [
				{
					id: obj.id,
					filename,
					...metadata,
				},
			]
		}
		return []
	})
	const rawUrls = blogGists.map(v => v.raw_url)
	const res2 = await Promise.all(rawUrls.map(url => fetch(url)))
	const ts = await Promise.all(res2.map((v: any) => v.text()))
	const blogPostData = ts.map((v, i) => {
		return {
			...matter(v).data,
			id: blogGists[i].id,
		}
	})
	return blogPostData
}

export const getPostById = async id => {
	const res = await fetch(`https://api.github.com/gists/${id}`, {
		headers: {
			authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
		},
	})
	const data = await res.json()
	const filename = Object.keys(data.files)[0]

	const rawUrl = data.files[filename].raw_url
	const res2 = await fetch(rawUrl)
	const post = await res2.text()
	return {
		data: matter(post).data,
		content: matter(post).content,
	}
}

export const sendContactEmail = async (message: string, email: string, name: string) => {
	const res = await fetch('/api/contact', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ message, email, name }),
	})
	const json = await res.json()
	return json
}
