import React from 'react';

const TypesOfEnergy = () => {
	return (
		<>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center mt-32 md:text-left text-center mb-[155px] md:mb-0 ">
				<div className="inner-container max-w-[554px] text-neutral-800 ">
					<div className="flex gap-2 justify-center items-center md:justify-start mb-6 ">
						<img
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65031d5793906960e211c523_OAK%20Stats%20Icon%20Thick.svg"
							alt="OAK Stats Icon Thick"
							className="brightness-80 w-6 h-6"
						/>
						<div className="text-[100%] font-bold text-blue-dark-gradient uppercase">
							Advanced tracking
						</div>
					</div>
					<div className="flex flex-col gap-8">
						<h1 className="text-3xl md:text-5xl  font-bold">
							Types of Energy Management Systems
						</h1>
						<p className="mb-10 opacity-90">
							<strong className="md:text-xl">
								Rule Based energy management systems
								<br />
							</strong>
							These systems are reliant on previously programmed logic to make
							decisions on how to control energy consumption. Rule based EMS are
							used for straightforward businesses where a few rules are enough
							to govern how the energy management system should operate. This
							ensures operational stability as long as there are no new or
							unpredicted consumption patterns.
							<br />
							<br />
							<strong className="md:text-xl">
								Forecast-based energy management system
								<br />
							</strong>
							<p>
								A forecast-driven EMS is the next advancement, this offers
								solutions for more complex scenarios that traditional rule-based
								systems struggle to handle. Its core mission? Elevating
								profitability. Using more complex computations to take into
								account other factors such as the spot price of the market,
								charge status of a battery or current generation of a Solar PV
								system. Its forecasting strategies include more considerations
								and model types, which are transformed into suggestions for
								saving energy.
							</p>
							<br />
							<br />
							<strong className="md:text-xl">
								Cloud based EMS solutions
								<br />
							</strong>
							<p>
								Cloud-based EMS software is the current cutting-edge technology
								of energy management systems. They revamp how energy management
								is done, as they are capable of adapting and optimising any
								business type regardless of industry while benefiting energy
								consultants and utility companies from its advanced often
								AI-driven analytics and forecasting.Cloud computing enables
								real-time access to consumption and recommendations from
								anywhere in the world, allowing a single person to be able to
								manage multiple sites regardless of geographical location. It
								includes flexible integration of IoT, advanced algorithms,
								real-time reporting and most importantly real-time actionable
								optimisations.
							</p>
							<br />
						</p>
					</div>
				</div>
				<div className="inner-container max-w-[609px] w-full">
					<div className="relative">
						<div className="inner-container mx-auto">
							<div className="image-wrapper rounded-[18px] shadow-md saturation-[147%] mr-[-3px]">
								<img
									src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66016ac7b6380b3916a8ceef_Equipment%20Monitoring.png"
									alt=""
									className="object-cover w-full h-full"
								/>
							</div>
						</div>
						<div className="absolute -bottom-10 md:w-1/3 w-[200px] left-0">
							<div className="image-wrapper image-above rounded-[24px]">
								<img
									src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65268b5a6ed1035b12a41eab_OAK%20Alert%20Email%20Notif%202.webp"
									alt=""
									className="object-cover w-full h-full mt-[-3px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TypesOfEnergy;
