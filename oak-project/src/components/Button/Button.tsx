import React from 'react';

import { Button as PrimeButton } from 'primereact/button';
interface ButtonProps {
	title?: string;
	css?: string;
	color?: string;
	icon?: string;
}
const Button = ({
	title,
	css = 'w-40 h-12 md:w-48 md:h-16 p-2 md:p-4 bg-black rounded-lg',
	color = 'white',
	icon = '',
}: ButtonProps) => {
	return (
		<>
			<a
				href="https://meetings.hubspot.com/nicholas-stewart?uuid=7e1b8158-35f9-4f64-aed0-0f5232ecb6bf"
				target="_blank"
				rel="noopener noreferrer"
			>
				<PrimeButton
					className={css}
					label={title}
					icon={icon}
					iconPos="right"
					style={{ color: `${color}`, fontWeight: 'semiBold' }}
				/>
			</a>
		</>
	);
};
//classname : padding works for arrow only
//example:
{
	/* <Button
	title="Book a Demo"
	icon="pi pi-arrow-up-right"
	css="text-black bg-[#21D5FE] w-48 h-16 font-bold p-8 rounded-lg"
	color="black"
/>; */
}
export default Button;
