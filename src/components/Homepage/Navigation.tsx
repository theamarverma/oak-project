// src/components/Navigation.tsx
import { Link } from '@tanstack/react-router';
import React from 'react';

const Navigation: React.FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/pricing">Pricing</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
