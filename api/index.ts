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
