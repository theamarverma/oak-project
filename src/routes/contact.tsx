import { createFileRoute } from '@tanstack/react-router';
import '../index.css';
export const Route = createFileRoute('/contact')({
	component: Contact,
});

import React from 'react';

export default function Contact() {
	return <div>Contact</div>;
}
