import React, { FC } from "react";
import { useIntl } from "react-intl";
import { Typewriter } from "react-simple-typewriter";

const TypingTitle: FC = () => {
	const intl = useIntl();

	const texts = [
		intl.formatMessage({ id: "page.home.title_1" }),
		intl.formatMessage({ id: "page.home.title_2" }),
		intl.formatMessage({ id: "page.home.title_3" }),
		intl.formatMessage({ id: "page.home.title_4" }),
		intl.formatMessage({ id: "page.home.title_5" }),
		intl.formatMessage({ id: "page.home.title_6" })
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

const TypingText: FC = () => {
	const intl = useIntl();

	const texts = [intl.formatMessage({ id: "page.home.my__self" })];

	return (
		<Typewriter
			words={texts}
			loop={true}
			cursor={true}
			cursorStyle="📍"
			typeSpeed={16}
			deleteSpeed={10000000}
			delaySpeed={1500}
		/>
	);
};

export { TypingTitle, TypingText };
