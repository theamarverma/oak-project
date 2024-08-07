import { createFileRoute } from '@tanstack/react-router';
import '../index.css';
export const Route = createFileRoute('/blog')({
	component: Blog,
});

import React from 'react';

export default function Blog() {
	return <div>Blog</div>;
}
