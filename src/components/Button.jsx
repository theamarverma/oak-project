// import React from 'react';

const Button = (props) => {
	return (
		<div>
			<button
				className={`bg-[#1ed6fe] hover:bg-blue-700 text-black font-bold ${props.varient} rounded`}
			>
				{props.title}
			</button>
		</div>
	);
};

export default Button;
