import React from 'react';

interface ButtonProps {
	title: string;
	btnSize: string;
}

const Button: React.FC<ButtonProps> = ({ title, btnSize }) => {
	return (
		<div>
			<button
				className={`bg-[#1ed6fe] hover:bg-white text-black font-bold ${btnSize} rounded`}
			>
				{title}
			</button>
		</div>
	);
};

export default Button;
