import "@/pages/globals.scss";
import "@/pages/theme.scss";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "@/i18n/en.json";
import ru from "@/i18n/ru.json";

const messages: any = {
	en,
	ru
};

function getDirection(locale: any): "ltr" {
	return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
	const { locale }: any = useRouter();

	return (
		// @ts-ignore
		<IntlProvider locale={locale} messages={messages[locale]}>
			<Component {...pageProps} dir={getDirection(locale)} />
		</IntlProvider>
	);
}
