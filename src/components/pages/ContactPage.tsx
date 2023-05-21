import React, { FC } from "react";
import scss from "./Style.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactPage: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<FormData>({
		mode: "onChange"
	});

	const TOKEN = "6182732393:AAEaon3732C55YRsWvLNdaEtLRKh4TSGhww";
	const CHAT_ID = "-1001985016010";
	const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	const messageModel = (data: FormData) => {
		let messageTG = `Name: <b>${data.name}</b>\n`;
		messageTG += `Email: <b>${data.email}</b>\n`;
		messageTG += `Subject: <b>${data.subject}</b>\n`;
		messageTG += `Message: <b>${data.message}</b>\n`;

		return messageTG;
	};

	const onSubmit = async (data: FormData) => {
		try {
			await axios.post(API_URL, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageModel(data)
			});

			notify();
			reset();
		} catch (err) {
			console.log(err);
		}
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
						<form onSubmit={handleSubmit(onSubmit)}>
							<div>
								<div>
									<input
										type="text"
										placeholder={intl.formatMessage({
											id: "page.contact.input.name"
										})}
										{...register("name", { required: true })}
									/>
									{errors.name && <p>Пожалуйста, введите ваше имя.</p>}
								</div>

								<div>
									<input
										type="text"
										placeholder={intl.formatMessage({
											id: "page.contact.input.email"
										})}
										{...register("email", {
											required: true,
											pattern: /^\S+@\S+$/i
										})}
									/>
									{errors.email && (
										<p>
											Пожалуйста, введите корректный адрес электронной почты.
										</p>
									)}
								</div>

								<div>
									<input
										type="text"
										placeholder={intl.formatMessage({
											id: "page.contact.input.subject"
										})}
										{...register("subject", { required: true, minLength: 2 })}
									/>
									{errors.subject && (
										<p>
											Пожалуйста, введите тему сообщения (минимум 2 символа).
										</p>
									)}
								</div>

								<div>
									<textarea
										className={font.className}
										placeholder={intl.formatMessage({
											id: "page.contact.input.message"
										})}
										{...register("message")}
									/>
								</div>
							</div>
							<button type="submit">send</button>
							<ToastContainer />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
