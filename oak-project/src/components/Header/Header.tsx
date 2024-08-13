import React from 'react';
import Nav from './Nav';
import { Link } from '@tanstack/react-router';

const Header: React.FC = () => {
	return (
		<>
			<div className="bg-[#131216] backdrop-filter backdrop-blur-lg bg-opacity-85 flex-wrap sticky top-0 z-[10020] mx-auto items-center justify-between p-2 flex w-full">
				<Link to="/">
					<img
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/64ff5f8243d7107029f71cea_OAK%20Logo%20vector.svg"
						alt="OAK Logo"
						className="h-14 w-40 text-white invert"
					/>
				</Link>
				<Nav />
			</div>
		</>
	);
};

export default Header;
