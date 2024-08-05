import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const NavLinks: React.FC = () => {
	return (
		<>
			<a href="#">Pricing</a>
			<a href="#">Energy Management System</a>
			<a href="#">Contact</a>
			<a href="#">Blog</a>
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
						btnSize="py-2 px-4"
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
				<div className="flex basis-full gap-2 flex-col items-center">
					<NavLinks />
				</div>
			)}
		</>
	);
};

export default Nav;
