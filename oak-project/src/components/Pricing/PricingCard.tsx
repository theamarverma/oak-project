import React from 'react';

import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

interface PricingCardProps {
	listItem: React.ReactNode;
	title: string;
	pricing: string;
	bg?: string;
	textColor?: string;
	priceColor?: string;
}

const PricingCard = ({
	listItem,
	title,
	pricing,
	bg,
	textColor = 'text-white',
	priceColor = 'text-[#656769]',
}: PricingCardProps) => {
	return (
		<div className={`${textColor} z-50`}>
			<div
				className={`card md:w-1/2  md:min-h-[615px] shadow-xl min-w-[363px] md:min-w-[393px]  ${bg} rounded-xl`}
			>
				<div className="flex flex-col gap-6  p-6 mx-4">
					<h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
					<h3
						className={`pricing md:text-2xl text-xl font-semibold ${priceColor}`}
					>
						{pricing}
					</h3>
					<hr />

					<div className="what-is-included ">
						<strong className="text-[#70F1FE] md:text-xl">
							What's included
						</strong>
						<ul className="flex flex-col gap-2 mt-2 ml-1 text-sm md:text-xl ">
							{listItem}
						</ul>
					</div>
					<a
						href="https://meetings.hubspot.com/nicholas-stewart?uuid=7e1b8158-35f9-4f64-aed0-0f5232ecb6bf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							className="w-full mt-10 h-12 md:w-72 md:h-16 p-2 md:p-4 bg-[#02f0fe] rounded-lg"
							label="Get Started"
							icon="pi pi-arrow-up-right"
							iconPos="right"
							style={{ color: 'black', fontWeight: 'Bold' }}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
