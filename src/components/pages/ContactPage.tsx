import React, { FC, useState } from "react";
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
	const [sendButton, setSendButton] = useState(false);

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

	const sendData = async (data: FormData) => {
		setSendButton(!sendButton);

		try {
			await axios.post(API_URL, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageModel(data)
			});

			setTimeout(() => {
				setSendButton(sendButton);
				notify();
				reset();
			}, 1500);
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
			<div
				id="contact"
				className={`${scss.text__z__index} ${scss.contact__page}`}
			>
				<div className="container">
					<div className={`${scss.content}`}>
						<div className={scss.form__content}>
							<div className={scss.form__text}>
								<h1>
									<FormattedMessage id="page.contact.title" />
								</h1>
								<h2>
									Let's work <br />
									together!
								</h2>
							</div>

							<form className={scss.form} onSubmit={handleSubmit(sendData)}>
								<div className={scss.form__group}>
									<input
										className={scss.form__field}
										type="text"
										placeholder={intl.formatMessage({
											id: "page.contact.input.name"
										})}
										{...register("name", { required: true, minLength: 2 })}
									/>
									<label htmlFor="name" className={scss.form__label}>
										<FormattedMessage id="page.contact.input.name" />
									</label>
									{errors.name && (
										<p className={scss.error}>Пожалуйста, введите ваше имя.</p>
									)}
								</div>

								<div className={scss.form__group}>
									<input
										className={scss.form__field}
										type="text"
										placeholder={intl.formatMessage({
											id: "page.contact.input.email"
										})}
										{...register("email", {
											required: true,
											pattern: /^\S+@\S+$/i
										})}
									/>
									<label htmlFor="email" className={scss.form__label}>
										<FormattedMessage id="page.contact.input.email" />
									</label>
									{errors.email && (
										<p className={scss.error}>
											Пожалуйста, введите корректный адрес электронной почты.
										</p>
									)}
								</div>

								<div className={scss.form__group}>
									<input
										className={scss.form__field}
										type="text"
										placeholder={intl.formatMessage({
											id: "page.contact.input.subject"
										})}
										{...register("subject", { required: true, minLength: 2 })}
									/>
									<label htmlFor="subject" className={scss.form__label}>
										<FormattedMessage id="page.contact.input.subject" />
									</label>
									{errors.subject && (
										<p className={scss.error}>
											Пожалуйста, введите тему сообщения.
										</p>
									)}
								</div>

								<div className={scss.form__group}>
									<textarea
										className={`${font.className} ${scss.form__field}`}
										placeholder={intl.formatMessage({
											id: "page.contact.input.message"
										})}
										{...register("message")}
									/>
									<label htmlFor="subject" className={scss.form__label}>
										<FormattedMessage id="page.contact.input.message" />
									</label>
								</div>

								<div className={scss.button__container}>
									{sendButton ? (
										<button className={`${scss.button} ${scss.active}`}>
											<span>
												<FormattedMessage id="page.contact.sending" />
											</span>
										</button>
									) : (
										<button type="submit" className={scss.button}>
											<span>
												<FormattedMessage id="page.contact.send" />
											</span>
										</button>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default ContactPage;
