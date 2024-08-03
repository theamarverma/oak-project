// import React from 'react';
import Button from './Button';

const InDepthMonitor = () => {
	return (
		<div>
			<div className="container mx-60  flex justify-center items-center  bg-[#ecf9fb] h-[650px] px-14 py-6 w-[1300px] rounded-xl">
				<div className="left-imgs relative top-16">
					<img
						className=" object-cover rounded-2xl"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651b579e15d68b20ac1b9524_OAK%20Alert%20Graph.webp"
						alt=""
					/>{' '}
					<div>
						<img
							className="absolute left-96 bottom-52 lef rounded-2xl object-cover z-10 w-[230px] h-[200px]"
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651b596d73077b1d4826ada8_OAK%20Recent%20Alerts.webp"
							alt=""
						/>
					</div>
				</div>

				<div className="right my-14 flex flex-col gap-3 p-9">
					<div className="text-md font-mono">IN-DEPTH MONITORING</div>
					<div className="text-5xl leading-[60px] font-semibold">
						Need more than just Reporting, check out OAK Live.
					</div>
					<p className="text-gray-500 leading-8">
						With OAK Live you will have access to real time data and get
						notified instantly about any unusual energy usage. Our sophisticated
						predictive algorithm helps prevent unexpected consumption by
						alerting you in advance, while enabling savings up to 30%.
					</p>
					<Button
						title="Find Out More"
						varient="py-6 px-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default InDepthMonitor;
