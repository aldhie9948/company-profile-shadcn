import transporter from "$lib/server/mailer.js";
import { env } from "$env/dynamic/private";

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const email = data.get("email");
		const msg = data.get("pesan");
		const name = data.get("nama");

		if (!email || !msg || !name) return { error: "Semua field harus diisi!" };

		const info = await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: env.MAIL_DESTINATION,
			subject: `Pesan dari ${name}`,
			text: msg as string
		});
		console.log(info.response);
		return { success: true };
	}
};
