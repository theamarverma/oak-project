import { MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react';

const Support = () => {
	return (
		<>
			<div className="card max-w-sm rounded-xl min-h-[600px] bg-[#28292B] text-white">
				<div className="flex flex-col gap-4 p-10">
					<img
						className="max-w-24"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/650214624c519243d8407e4b_OAK%20Screen%20Icon.svg"
						alt=""
					/>
					<strong className="text-3xl">Support</strong>
					<p>
						We are committed to providing the best possible customer service and
						support. If you have any feedback on how we can improve our service,
						please let us know.
					</p>
					<a className="mail flex">
						<span className="inline-flex gap-2">
							<MailIcon
								size={24}
								color="#72797E"
							/>
							support@oak-network.com
						</span>
					</a>
					<a className=" phone">
						<span className="inline-flex gap-2">
							<PhoneIcon
								color="#72797E"
								size={24}
							/>
							02033028909
						</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default Support;
