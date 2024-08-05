import { Button } from 'primereact/button';
import React from 'react';

const Demo = () => {
	return (
		<>
			<div className="relative overflow-hidden bg-[#eff4f8] h-[700px] ">
				<div className="bg-[#49b0fe] w-full h-full absolute z-10 inset-y-0 md:ml-48 rounded-b-2xl rounded-t-2xl">
					<div className="flex flex-col md:flex-row justify-center items-center h-full p-4">
						<div className="mx-auto p-4 md:p-12 flex flex-col gap-4 md:gap-8 items-start md:items-start">
							<h1 className="text-2xl md:text-4xl font-medium md:min-w-[500px]">
								Book a Demo with Oak Network today
							</h1>
							<p className="text-base md:text-lg">
								Gain compelling insights into your energy efficiency potential.
							</p>
							<a
								href="https://meetings.hubspot.com/nicholas-stewart?uuid=7e1b8158-35f9-4f64-aed0-0f5232ecb6bf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									className="w-40 h-12 md:w-48 md:h-16 p-2 md:p-4 bg-black rounded-lg"
									label="Book a Demo"
									icon="pi pi-arrow-up-right"
									iconPos="right"
									style={{ color: 'white', fontWeight: 'semiBold' }}
								/>
							</a>
						</div>
						<div className="w-full md:w-auto">
							<img
								className="object-cover w-full md:w-auto p-4 md:p-0 md:p-64"
								src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651bf7bdecfa9b8a0267c961_OAK%20Network%20Graphic.webp"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Demo;
