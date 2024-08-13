import { MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react';

const Partners = () => {
	return (
		<>
			<div className="card max-w-sm rounded-xl min-h-[600px] bg-[#28292B] text-white">
				<div className="flex flex-col gap-4 p-10">
					<img
						className="max-w-24"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/650214629ca5eb6ab99d2b6f_OAK%20Report%20Icon.svg"
						alt=""
					/>
					<strong className="text-3xl">Partners</strong>
					<p>Partnerships we're currently looking for include:</p>
					<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
						<li>Training Consultant</li>
						<li>Net Zero Consultant</li>
						<li>Green-Tech Consultant</li>
					</ul>
					<a className="mail flex">
						<span className="inline-flex gap-2">
							<MailIcon
								size={24}
								color="#72797E"
							/>
							hello@oak-network.com
						</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default Partners;
