interface configIf {
	title: string
	description: string
}

const config: configIf = {
	title: 'Joona Piirainen Blog',
	description: 'foo bar',
}

export async function getConfig() {
	return config
}
