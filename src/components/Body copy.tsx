import React from 'react';
import Benefits from './Benefits';
import Button from './Button';
import InDepthMonitor from './InDepthMonitor';
import ComplianceSimplified from './ComplianceSimplified';

const Body: React.FC = () => {
	return (
		<>
			<div className="h-full bg-black">
				<div className="w-[1300px] mx-60">
					<div className="gap-4 mx-52 flex justify-center items-center flex-col w-full max-w-4xl p-4">
						<strong className="text-4xl mt-32 md:text-5xl lg:text-7xl p-4 text-white text-center">
							Automated Energy Reporting from £99/month
						</strong>
						<div className="text-base md:text-lg lg:text-xl text-white text-center">
							OAK does all the data compiling and analysis for your compliance
							reporting related to energy! We help you achieve your compliance
							requirements, all whilst saving you money! With OAK, your business
							can save up to 30% in energy costs.
						</div>
						<div className="text-base md:text-lg lg:text-xl text-white text-center">
							Book a Demo now to learn more, or why not use our Compliance
							Requirement Tool to discover what measures/legislation you may
							need to report on?
						</div>
						<div className="mt-6 gap-4 flex">
							<Button
								title="Book a Demo"
								btnSize="py-6 px-8"
							/>
						</div>
					</div>

					<div className="relative flex mt-32 items-center justify-center ml-10">
						<img
							className="relative main-img object-cover"
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651b2a0448f71021552f9842_OAK%20Network%20Hero%20Image-p-1080.webp"
							alt="Main Image"
						/>
						<div>
							<img
								className="p-2 absolute -top-36 -right-16 object-cover h-[190px] w-[200px] z-20 rounded-lg"
								src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66aba0c6621b06f03479a4d4_Consumption%20per%20unit-p-500.png"
								alt="Top-Right Image"
							/>
						</div>

						<img
							className="absolute bottom-0 left-0 mb-4 ml-4 object-cover h-[250px] w-[300px] z-10 rounded-lg"
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66ab9ef08a88240ab65739b7_Screenshot%202024-08-01%20at%2016.42.48-p-500.png"
							alt="Bottom-Left Image"
						/>
					</div>
				</div>
			</div>

			<div className="h-full w-full bg-[#ced6da] text-black">
				<ComplianceSimplified />
				<InDepthMonitor />
			</div>
			<Benefits />
		</>
	);
};

export default Body;
