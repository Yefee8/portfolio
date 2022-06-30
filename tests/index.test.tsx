/**
 * @jest-environment jsdom
 */
import React from 'react';
import Index from 'pages/index';
import { render, screen } from 'tests/test-utils';

test('App renders correctly', () => {
	render(<Index />);
	expect(screen.getByLabelText('app-container')).toBeInTheDocument;
});
