import React from 'react';

const Reporting: React.FC = () => {
	return (
		<>
			<div className="grid grid-cols-2 mt-9 space-x-12">
				<div className="card1 w-[640px] h-[760px] bg-[#eff4f8] p-11 rounded-xl text-black gap-7 flex justify-center flex-col">
					<strong className="text-2xl">Compliance Reporting</strong>
					<p className="text-xl text-gray-500">
						Automating data collection and formatting of energy data required
						for all types of compliance reporting, e.g., ESOS, CSRD, ISO50001,
						B-Corp...
					</p>
					<img
						className="left-2 object-cover rounded-xl"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6669a54f74210d019bd6f294_Screenshot%202024-06-12%20at%2015.40.26-p-800.png"
						alt="Compliance Reporting Screenshot"
						height={500}
						width={650}
					/>
				</div>
				<div className="card2 w-[640px] h-[760px] bg-[#02f0fe] p-11 rounded-xl text-black gap-7 flex justify-center flex-col">
					<strong className="text-2xl">Save while you comply</strong>
					<p className="text-xl text-gray-500">
						With OAK Reporting +, you will not only reduce time spent on
						reporting by 80%, but also know where and how to make savings.
					</p>
					<strong>This is key to go one step further.</strong>
					<img
						className="left-2 object-cover rounded-xl"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6669a719aed28d111303ca28_Screenshot%202024-06-12%20at%2015.48.01-p-500.png"
						alt="Save while you comply"
						height={445}
						width={424}
					/>
				</div>
			</div>
			<div className="h-[430px] w-[1304px] grid grid-cols-2 items-center p-10 text-black mt-6 bg-[#eff4f8] rounded-xl">
				<div className="left flex flex-col gap-4">
					<heading className="text-3xl font-semibold">
						Access to OAK Lite Dashboard
					</heading>
					<div className="flex-wrap w-[400px]">
						Monitor Key Performance Indicators (KPIs), identify trends, spot
						process and operational issues. Make the best data-driven decisions
						to optimize energy consumption.
					</div>
					<button className="bg-transparent border-2 border-black p-5 w-44 rounded-lg">
						Learn more
					</button>
				</div>
				<div className="right">
					<div className="parent relative">
						<img
							className="object-fit rounded-xl"
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651b5d811e3e28d0469cbd71_OAK%20Consumtion%20graph-p-800.webp"
							alt="OAK Lite Dashboard"
							width={650}
							height={360}
						/>
						<div className="child">
							<img
								className="object-cover absolute -left-16 bottom-8 rounded-lg"
								src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65268e4e675b70e1b71b4555_OAK%20Heatmap%20Dashboard-p-500.webp"
								alt="OAK Heatmap Dashboard"
								height={180}
								width={340}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reporting;
