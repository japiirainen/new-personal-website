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
	publiUrl: string
	githubUrl: string
	image: string
	smallDesc: string
}

export const projectData: Array<projectDataIf> = [
	{
		id: 1,
		name: 'Js-Quiz',
		githubUrl: 'https://github.com/japiirainen/js-quiz',
		publiUrl: 'js-quiz.me',
		smallDesc: 'Website for learning JavaScript...',
		image:
			'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
	},
	{
		id: 2,
		name: 'Oluet-api',
		githubUrl: 'https://github.com/japiirainen/oluet-api',
		publiUrl: 'todo.com',
		smallDesc: 'API for querying beer...',
		image:
			'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
	},
	{
		id: 3,
		name: 'Var-lib-showcase',
		githubUrl: 'https://github.com/japiirainen/var-lib-dpkg-status-showcase',
		publiUrl: 'https://reactor-pre-assignment.herokuapp.com/',
		smallDesc: 'Coding challenge by Reaktor...',
		image:
			'https://s3.eu-north-1.amazonaws.com/japiirainen.com/Screenshot+2020-12-14+at+19.22.41.png',
	},
]

export const getAllPosts = async () => {
	const res = await fetch('https://api.github.com/users/japiirainen/gists', {
		headers: {
			Authorization: process.env.GITHUB_TOKEN,
		},
	})
	const data = await res.json()
	const files = data.map(v => v.files)
	const filenames = files.flatMap(Object.keys)
	const rawUrls = files.map((v, i) => v[filenames[i]].raw_url)
	const res2 = await Promise.all(rawUrls.map(url => fetch(url)))
	const jsons = await Promise.all(res2.map((v: any) => v.text()))
	const blogPostData = jsons.map(v => matter(v).data)
	return blogPostData.map((v, i) => ({ ...v, id: data[i].id }))
}

export const getPostById = async id => {
	const res = await fetch(`https://api.github.com/gists/${id}`, {
		headers: {
			Authorization: process.env.GITHUB_TOKEN,
		},
	})
	const data = await res.json()
	const rawUrl = data.files[data.description + '.mdx'].raw_url
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
