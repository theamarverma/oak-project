import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog')({
	component: Blog,
});

import React from 'react';

export default function Blog() {
	return <div>Blog</div>;
}
