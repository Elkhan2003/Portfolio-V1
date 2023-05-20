import React, { FC } from "react";
import scss from "./Style.module.scss";
import Contact from "@/components/contact/Contact";

const ContactPage: FC = () => {
	return (
		<>
			<div id="contact" className={scss.contact__page}>
				<div className="container">
					<div className={`${scss.text__z__index} ${scss.content}`}>
						<div className={scss.title}>
							<h4>Contact</h4>
						</div>
						<Contact />
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactPage;
