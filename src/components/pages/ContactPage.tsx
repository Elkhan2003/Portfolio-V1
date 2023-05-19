import React, { FC } from "react";
import scss from "./Style.module.scss";
import Contact from "@/components/contact/Contact";

const ContactPage: FC = () => {
	return (
		<>
			<div className={scss.contact__page}>
				<div className="container">
					<div className={`${scss.text__z__index} ${scss.content}`}>
						<Contact />
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactPage;
