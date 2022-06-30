import React, { createContext, ReactNode, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/dist/client/router';
export const MockRouter = (route = '') => ({
	basePath: '',
	pathname: `/${route}`,
	route: `/${route}`,
	asPath: `/${route}`,
	query: {},
	push: jest.fn(),
	replace: jest.fn(),
	reload: jest.fn(),
	back: jest.fn(),
	prefetch: jest.fn(),
	beforePopState: jest.fn(),
	events: {
		on: jest.fn(),
		off: jest.fn(),
		emit: jest.fn()
	},
	isFallback: false,
	isLocaleDomain: false,
	isReady:true,
	isPreview:false
});

const theme = require('../public/styles/theme');
export const ThemeContext = createContext(theme);

const Providers =
	(Router: NextRouter) =>
	({ children }: { children?: ReactNode }) => {
		return (
			<ThemeContext.Provider value={theme}>
				<RouterContext.Provider value={Router}>
					{children}
				</RouterContext.Provider>
			</ThemeContext.Provider>
		);
	};

const customRender = (ui:ReactElement, options = { route: '' }) =>
	render(ui, { wrapper: Providers(MockRouter(options.route)), ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
