import React, { FC } from "react";
import { useIntl } from "react-intl";
import { Typewriter } from "react-simple-typewriter";

const SpringText: FC = () => {
	const intl = useIntl();

	const texts = [
		intl.formatMessage({ id: "page.home.title_1" }),
		intl.formatMessage({ id: "page.home.title_2" }),
		intl.formatMessage({ id: "page.home.title_3" }),
		intl.formatMessage({ id: "page.home.title_4" })
	];

	return (
		<Typewriter
			words={texts}
			loop={true}
			cursor={true}
			cursorStyle="|"
			typeSpeed={50}
			deleteSpeed={10}
			delaySpeed={1500}
		/>
	);
};

export default SpringText;
