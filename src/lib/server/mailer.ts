import nodemailer from "nodemailer";
import { env } from "$env/dynamic/private";

const transporter = nodemailer.createTransport({
	host: env.SMTP_MAIL_HOST,
	port: Number(env.SMTP_MAIL_PORT),
	secure: true,
	auth: {
		user: env.SMTP_MAIL_USER,
		pass: env.SMTP_MAIL_PASSWORD
	}
});

export default transporter;
