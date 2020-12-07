import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const constructMsg = (name: string, message: string) => `${message} from ${name}`

export async function sendEmail(contacter: string, message: string, name: string): Promise<void> {
	console.log(process.env.EMAIL_USER)
	console.log(process.env.EMAIL_PASSWORD)
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	})

	const info = await transporter.sendMail({
		from: process.env.EMAIL_USER,
		to: 'joona.piirainen@gmail.com',
		subject: `Contact from ${contacter}`,
		html: constructMsg(name, message),
	})

	console.log('Message sent: %s', info.messageId)
}
