import React from 'react';

interface ButtonProps {
	title: string;
	varient: string;
}

const Button: React.FC<ButtonProps> = ({ title, varient }) => {
	return (
		<div>
			<button
				className={`bg-[#1ed6fe] hover:bg-blue-700 text-black font-bold ${varient} rounded`}
			>
				{title}
			</button>
		</div>
	);
};

export default Button;
