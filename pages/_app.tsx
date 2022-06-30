import React, { FC } from 'react';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import "../public/styles/glob.css";

import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import ThemeContext, { theme } from 'contexts/themeContext';
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<ThemeContext.Provider value={theme}>
				<Component {...pageProps} />
			</ThemeContext.Provider>
		</>
	);
};

export default MyApp;
