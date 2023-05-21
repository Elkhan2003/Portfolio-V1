import React, { FC, useState } from "react";
import scss from "./Style.module.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormattedMessage, useIntl } from "react-intl";

import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface ContactPageType {
	className?: any;
}

const ContactPage: FC<ContactPageType> = ({ className }) => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: ""
	});

	const TOKEN = "6182732393:AAEaon3732C55YRsWvLNdaEtLRKh4TSGhww";
	const CHAT_ID = "-1001985016010";
	const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	const messageModel = () => {
		let messageTG = `Name: <b>${formData.name}</b>\n`;
		messageTG += `Email: <b>${formData.email}</b>\n`;
		messageTG += `Subject: <b>${formData.subject}</b>\n`;
		messageTG += `Message: <b>${formData.message}</b>\n`;

		return messageTG;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const notify = () => {
		toast.success("Ваша форма успешно отправлена!", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark"
		});
	};

	async function sendData(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();

		try {
			await axios.post(API_URL, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageModel()
			});

			notify();

			setFormData({
				name: "",
				email: "",
				subject: "",
				message: ""
			});
		} catch (err) {
			console.log(err);
		}
	}

	const intl: any = useIntl();

	return (
		<>
			<div id="contact" className={scss.contact__page}>
				<div className="container">
					<div className={`${scss.text__z__index} ${scss.content}`}>
						<div className={scss.title}>
							<h4>
								<FormattedMessage id="page.contact.title" />
							</h4>
						</div>
						<form onSubmit={sendData}>
							<div>
								<div>
									<div>
										<input
											type="text"
											name="name"
											id="name"
											value={formData.name}
											onChange={handleChange}
											required
										/>
										<label htmlFor="name">
											<FormattedMessage id="page.contact.input.name" />
										</label>
									</div>

									<div>
										<input
											type="text"
											name="email"
											id="email"
											value={formData.email}
											onChange={handleChange}
											required
										/>
										<label htmlFor="email">
											<FormattedMessage id="page.contact.input.email" />
										</label>
									</div>

									<div>
										<input
											type="text"
											name="subject"
											id="subject"
											value={formData.subject}
											onChange={handleChange}
											required
										/>
										<label htmlFor="subject">
											<FormattedMessage id="page.contact.input.subject" />
										</label>
									</div>

									<div>
										<textarea
											className={font.className}
											name="message"
											id="message"
											placeholder={intl.formatMessage({
												id: "page.contact.input.message"
											})}
											value={formData.message}
											onChange={handleChange}
										/>
									</div>
								</div>
								<button>send</button>
								<ToastContainer />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactPage;
