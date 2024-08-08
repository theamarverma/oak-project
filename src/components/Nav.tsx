import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button/Button';
import { Link } from '@tanstack/react-router';

const NavLinks: React.FC = () => {
	return (
		<>
			<Link to="/pricing">Pricing</Link>
			<Link to="/energy-management-system">Energy Management System</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/blog">Blog</Link>
		</>
	);
};

const Nav: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleHandler = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<nav className="flex justify-end">
				<div className="space-x-10 text-white font-medium hidden sm:flex items-center">
					<NavLinks />
					<Button
						title="Book a Demo"
						css="text-black bg-[#21D5FE] w-32 h-10 font-bold p-2 rounded-lg"
						color="black"
					/>
				</div>

				<div className="sm:hidden">
					<button onClick={toggleHandler}>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>
			{/* for mobile hamburger menu */}
			{isOpen && (
				<div className="flex basis-full gap-2 flex-col text-white items-center">
					<NavLinks />
				</div>
			)}
		</>
	);
};

export default Nav;
