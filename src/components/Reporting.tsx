import React from 'react';

const Reporting: React.FC = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 mt-9 gap-6 md:gap-12 px-4 sm:px-6 lg:px-8">
				<div className="card1 bg-[#eff4f8] p-8 md:p-11 rounded-xl text-black flex flex-col gap-4 md:gap-7 justify-center">
					<strong className="text-xl md:text-2xl">Compliance Reporting</strong>
					<p className="text-gray-500">
						Automating data collection and formatting of energy data required
						for all types of compliance reporting, e.g., ESOS, CSRD, ISO50001,
						B-Corp...
					</p>
					<img
						className="object-cover rounded-xl"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6669a54f74210d019bd6f294_Screenshot%202024-06-12%20at%2015.40.26-p-800.png"
						alt="Compliance Reporting Screenshot"
					/>
				</div>
				<div className="card2 bg-[#02f0fe] p-8 md:p-11 rounded-xl text-black flex flex-col gap-4 md:gap-7 justify-center">
					<strong className="text-xl md:text-2xl">Save while you comply</strong>
					<p className="text-gray-500">
						With OAK Reporting +, you will not only reduce time spent on
						reporting by 80%, but also know where and how to make savings.
					</p>
					<strong className="text-black">
						This is key to go one step further.
					</strong>
					<img
						className="object-cover rounded-xl"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6669a719aed28d111303ca28_Screenshot%202024-06-12%20at%2015.48.01-p-500.png"
						alt="Save while you comply"
					/>
				</div>
			</div>
			<div className="bg-[#eff4f8] p-8 md:p-10 mt-6 rounded-xl text-black grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl md:text-3xl font-semibold">
						Access to OAK Lite Dashboard
					</h1>
					<p className="text-gray-600">
						Monitor Key Performance Indicators (KPIs), identify trends, spot
						process and operational issues. Make the best data-driven decisions
						to optimize energy consumption.
					</p>
					<button className="mt-4 md:mt-0 bg-transparent border-2 border-black py-2 px-4 md:p-5 rounded-lg">
						Learn more
					</button>
				</div>
				<div className="relative">
					<img
						className="object-cover rounded-xl"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651b5d811e3e28d0469cbd71_OAK%20Consumtion%20graph-p-800.webp"
						alt="OAK Lite Dashboard"
					/>
					<div className="absolute left-0 md:left-auto md:right-0 bottom-8 transform md:translate-x-1/2">
						<img
							className="object-cover rounded-lg"
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65268e4e675b70e1b71b4555_OAK%20Heatmap%20Dashboard-p-500.webp"
							alt="OAK Heatmap Dashboard"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reporting;
