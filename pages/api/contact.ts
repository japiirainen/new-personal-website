import { sendEmail } from 'api/sendEmail'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const {
			body: { message, email, name },
		} = req
		await sendEmail(email, message, name)
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		res.json({ name: 'John Doe' })
	} catch (e) {
		console.error(e)
		res.statusCode = 400
		res.end()
	}
}
