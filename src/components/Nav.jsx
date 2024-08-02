import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
const NavLinks = () => {
	return (
		<>
			<a href="">Pricing </a>
			<a href="">Energy Management System</a>
			<a href="">Contact</a>
			<a href=""> Blog</a>
		</>
	);
};
const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<nav className=" flex justify-end">
				<div className=" space-x-10 font-medium hidden sm:flex items-center">
					<NavLinks />
					<Button />
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
