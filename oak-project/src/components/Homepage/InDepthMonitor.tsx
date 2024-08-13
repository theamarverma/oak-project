import React from 'react';
import Button from '../Button/Button';

const InDepthMonitor: React.FC = () => {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="flex flex-col lg:flex-row justify-center items-center bg-[#ecf9fb] rounded-xl p-6">
				<div className="relative mb-8 lg:mb-0 lg:mr-8 md:min-w-[500px]">
					<img
						className="object-cover rounded-2xl w-full max-w-lg"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651b579e15d68b20ac1b9524_OAK%20Alert%20Graph.webp"
						alt="OAK Alert Graph"
					/>
					<img
						className="absolute hidden md:block right-10 -top-24 shadow-md rounded-2xl object-cover z-10 w-[150px] h-[130px] md:w-[200px] md:h-[170px]"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651b596d73077b1d4826ada8_OAK%20Recent%20Alerts.webp"
						alt="OAK Recent Alerts"
					/>
				</div>

				<div className="flex flex-col gap-4 p-4 lg:p-9 text-center lg:text-left">
					<div className="text-sm sm:text-md font-mono text-gradient2">
						IN-DEPTH MONITORING
					</div>
					<div className="text-3xl sm:text-4xl md:text-5xl leading-snug font-semibold text-gray-900">
						Need more than just Reporting? Check out OAK Live.
					</div>
					<p className="text-gray-500 leading-8">
						With OAK Live, you will have access to real-time data and get
						notified instantly about any unusual energy usage. Our sophisticated
						predictive algorithm helps prevent unexpected consumption by
						alerting you in advance, enabling savings of up to 30%.
					</p>
					<div className="mt-4">
						<Button
							title="Find Out More"
							icon="pi pi-arrow-up-right"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InDepthMonitor;
