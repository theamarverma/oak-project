import { createFileRoute } from '@tanstack/react-router';
import '../index.css'; // Ensure this imports the file where Tailwind is setup

export const Route = createFileRoute('/pricing')({
	component: Pricing,
});

import React from 'react';
import App from '../App';
import Header from '../components/Header';

export default function Pricing() {
	return (
		<div>
			<Header />
		</div>
	);
}
