import React, { FC } from "react";
import scss from "./Style.module.scss";
import Contact from "@/components/contact/Contact";

import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

interface FormData {
	first_name: string;
	last_name: string;
	phone: string;
	subject: string;
	message: string;
}

const ContactPage: FC = () => {
	return (
		<>
			<div id="contact" className={scss.contact__page}>
				<div className="container">
					<div className={`${scss.text__z__index} ${scss.content}`}>
						<div className={scss.title}>
							<h4>Contact</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactPage;
