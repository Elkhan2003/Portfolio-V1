import { FC, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import scss from "./Contact.module.scss";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const Contact: FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: ""
	});

	const [isSend, setIsSend] = useState(false);
	const [sendButton, setSendButton] = useState(false);

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

		const { name, email } = formData;

		const errName = document.getElementById("errName") as HTMLSpanElement;
		const errEmail = document.getElementById("errEmail") as HTMLSpanElement;

		if (!validateName(name)) {
			errName.innerText = "Please enter a valid name!";
			return;
		} else if (!validateEmail(email)) {
			errEmail.innerText = "Please enter a valid e-mail address!";
			errName.innerText = "";
			return;
		} else {
			errName.innerText = "";
			errEmail.innerText = "";
		}

		setFormData({
			name: "",
			email: "",
			subject: "",
			message: ""
		});

		errName.innerText = "";
		errEmail.innerText = "";

		notify();

		setSendButton(!sendButton);

		try {
			await axios.post(API_URL, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageModel()
			});

			setIsSend(!isSend);

			setInterval(() => {
				setIsSend(isSend);
			}, 6000);

			setSendButton(sendButton);
		} catch (err) {
			console.log(err);
		}
	}

	const validateName = (nameS: string) => {
		const regex = /^[\w\s]{2,30}$/;
		return regex.test(nameS);
	};

	const validateEmail = (emailS: string) => {
		const regex = /^\S+@\S+\.\S+$/;
		return regex.test(emailS);
	};

	return (
		<>
			<div className={scss.contact_page}>
				<div className={scss.form_wrapper}>
					<div className={scss.box}>
						<div className={isSend ? scss.box_img_send : scss.box_img}>
							Contact me
						</div>
					</div>
					<form onSubmit={sendData} className={scss.form}>
						<div className={scss.label}>Name*</div>
						<input
							required
							className={scss.input}
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
						/>
						<span id="errName"></span>

						<div className={scss.label}>E-mail*</div>
						<input
							required
							className={scss.input}
							type="text"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
						<span id="errEmail"></span>

						<div className={scss.label}>Subject*</div>
						<input
							required
							className={scss.input}
							type="text"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
						/>

						<div className={scss.label}>Message</div>
						<textarea
							rows={8}
							className={scss.textarea}
							name="message"
							value={formData.message}
							onChange={handleChange}
						></textarea>

						<button
							className={sendButton ? scss.form_btn_send : scss.form_btn}
							type="submit"
						>
							{sendButton ? "Sending..." : "Submit"}
						</button>
					</form>
					<ToastContainer />
				</div>
			</div>
		</>
	);
};

export default Contact;
