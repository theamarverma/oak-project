import React from 'react';
import Button from '../Button/Button';

const InDepthMonitoring = () => {
	return (
		<>
			<div className="grid md:grid-cols-2 grid-cols-1 md:text-left text-center gap-16 md:gap-8 p-10 ">
				<div className="inner-container max-w-[571px] mt-[-33px] md:mt-0 order-2 md:order-1">
					<div className="relative">
						<div className="inner-container">
							<div className="image-wrapper rounded-[18px] shadow-md">
								<img
									src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6601a390423db935319de966_OAKy%20Pose%202.png"
									alt=""
									className="object-cover md:w-full h-full"
								/>
							</div>
						</div>
						<div className="absolute top-0 left-0"></div>
					</div>
				</div>
				<div className="inner-container max-w-[570px] text-neutral-800 order-1 md:order-2 ">
					<div className="flex items-center justify-center md:justify-start gap-4 mb-6 ">
						<img
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65031bee6061ee6a0358bdd5_OAK%20Screen%20Notif%20Icon%20Thick.svg"
							alt="OAK Screen Notification Thick"
							className="brightness-80 w-6 h-6"
						/>
						<div className="text-[100%] font-bold text-blue-dark-gradient uppercase">
							In-depth monitoring
						</div>
					</div>
					<div className="flex flex-col md:items-start items-center gap-6">
						<h2 className="text-4xl font-bold">
							How does an Energy Management System work?
						</h2>
						<p className="mb-10 opacity-90">
							An EMS works by collecting live energy usage data from the source
							(energy meter or individual appliances) to analyse a business's
							energy consumption patterns, generally using AI or smart
							algorithms. The system then displays this data on a visual
							platform, turning complex data into simple, actionable insights.
							<br />
							<br />
							EMS solutions like Oak are the foundation of reducing energy
							consumption. We make the once impossible job of live data
							collection part of your team's day-to-day, incentivising savings
							to lower energy usage and operating costs.
						</p>
						<div className="flex justify-center md:flex-col">
							<a
								href="https://oak-network.perspectivefunnel.com/savingsestimate/"
								target="_blank"
								className="btn-primary w-button"
							>
								<Button
									icon="pi pi-arrow-up-right"
									title="Free savings estimate"
									css="text-black bg-[#21D5FE] w-[272px]  h-[72px] font-bold p-8  rounded-lg"
									color="black"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InDepthMonitoring;
