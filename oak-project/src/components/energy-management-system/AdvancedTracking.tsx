import React from 'react';

const AdvancedTracking = () => {
	return (
		<>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-8 text-center md:text-left items-center mb-[155px] md:mb-0">
				<div className="inner-container max-w-[554px] text-neutral-800 ">
					<div className="flex md:justify-start justify-center gap-2 mb-6 p-2">
						<img
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65031d5793906960e211c523_OAK%20Stats%20Icon%20Thick.svg"
							alt="OAK Stats Icon Thick"
							className="brightness-80 w-6 h-6"
						/>
						<div className="text-[100%] font-bold text-blue-dark-gradient uppercase">
							Advanced tracking
						</div>
					</div>
					<div className="flex flex-col md:items-start  gap-6">
						<h1 className="text-2xl md:text-5xl font-semibold">
							What is an Energy Management System?
						</h1>
						<p className="mb-10 md:text-xl opacity-90">
							An Energy Management system (EMS) is designed to manage and reduce
							a business's energy consumption. An EMS not only displays and
							provides an overview of your energy consumption data, but also
							helps identify opportunities to save. This can be in the form of:
							<br />
							<br />
							- Behaviour improvement to lower energy usage
							<br />
							- Identifying appliances which require maintenance
							<br />
							- Implementing energy-saving technologies
							<br />
							<br />
							Most energy management systems require extensive staff training to
							successfully lower energy usage. However, at OAK, we focus on
							analysing and turning the data into actionable ways to reduce
							energy consumption and costs. This way, you can get all the
							benefits of an EMS without any technical training.
							<br />
							<br />
						</p>
					</div>
				</div>
				<div className="inner-container max-w-[609px] w-full">
					<div className="relative">
						<div className="inner-container mx-auto ">
							<div className="image-wrapper rounded-[18px] shadow-md saturation-[147%] mr-[-3px]">
								<img
									src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651bf7bdecfa9b8a0267c961_OAK%20Network%20Graphic.webp"
									alt="OAK Network EMOS Graphic"
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

export default AdvancedTracking;
