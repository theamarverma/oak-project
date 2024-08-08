import React from 'react';

const Benefits = () => {
	return (
		<>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-8 text-right md:text-center">
				<div className="inner-container max-w-[570px] text-neutral-800 md:text-center">
					<div className="flex items-center justify-center mb-6 md:flex-col md:justify-center">
						<img
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65031d5793906960e211c523_OAK%20Stats%20Icon%20Thick.svg"
							alt="OAK Stats Icon Thick"
							className="brightness-80 w-6 h-6"
						/>
						<div className="text-[100%] font-bold text-blue-dark-gradient uppercase">
							Advanced tracking
						</div>
					</div>
					<h1 className="text-4xl font-bold">
						Benefits of using an Energy Management System
					</h1>
					<p className="mb-10 opacity-90">
						The primary benefit of an Energy Management System (EMS) is cost
						savings. EMS helps you to reduce energy consumption by identifying
						and correcting inefficient practices. Other benefits include:
						<br />
						<br />
						<strong>
							Increased energy efficiency
							<br />
						</strong>
						EMS helps to identify and implement energy-saving measures, leading
						to reduced energy consumption and lower energy bills. This not only
						saves money, but also helps to reduce your carbon footprint.
						<br />
						<br />
						<strong>
							Improved operational performance
							<br />
						</strong>
						By monitoring and analysing energy consumption data, an EMS helps to
						identify areas where energy is being wasted, allowing you to make
						informed decisions about where to focus your energy-saving efforts.
						This can lead to improved operational performance and increased
						productivity.
						<br />
						<br />
						<strong>
							Enhanced regulatory compliance
							<br />
						</strong>
						Many businesses are subject to regulations governing energy use and
						emissions. An EMS helps to ensure that you are in compliance with
						these regulations, reducing the risk of fines and other penalties.
						<br />
						<br />
						<strong>
							Better decision making
							<br />
						</strong>
						By providing real-time data on energy consumption, an EMS helps you
						to make more informed decisions about energy use. This can lead to
						more efficient use of resources and improved overall performance.
						<br />
					</p>
				</div>
				<div className="inner-container max-w-[571px] mt-[-33px] md:mt-0">
					<div className="relative">
						<div className="inner-container">
							<div className="image-wrapper rounded-[18px] shadow-md">
								<img
									src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6601a390423db935319de966_OAKy%20Pose%202.png"
									alt=""
									className="object-cover w-full h-full"
								/>
							</div>
						</div>
						<div className="absolute top-0 left-0"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Benefits;
