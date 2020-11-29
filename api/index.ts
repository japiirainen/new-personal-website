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
