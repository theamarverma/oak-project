import { createFileRoute } from '@tanstack/react-router';
import '../index.css';

export const Route = createFileRoute('/energy-management-system')({
	component: EnergyManagementSystem,
});

import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button/Button';
import AdvancedTracking from '../components/energy-management-system/AdvancedTracking';
import InDepthMonitoring from '../components/energy-management-system/InDepthMonitoring';
import TypesOfEnergy from '../components/energy-management-system/TypesOfEnergy';
import Benifits from '../components/energy-management-system/Benefits';
import Benefits from '../components/energy-management-system/Benefits';

export default function EnergyManagementSystem() {
	return (
		<>
			<div className="bg-white">
				<Header />
				<div className="bg-black  h-full w-full flex justify-center items-center text-white">
					<div className="md:w-1/2  mt-24 flex flex-col text-center gap-4 p-2 md:mb-4">
						<strong className="md:text-7xl text-5xl p-4 md:p-8 ">
							Energy Management System (EMS)
						</strong>
						<p className="text-xl">
							Start your journey to lower energy bills and a smaller carbon
							footprint with OAK's Energy Management System (EMS). Request your
							free savings estimate now and tap into the benefits of advanced
							energy efficiency.
						</p>
						<div className="pt-4">
							<Button
								icon="pi pi-arrow-up-right"
								title="Book a Demo"
								css="text-black bg-[#21D5FE] w-48 h-16 font-bold p-8 rounded-lg"
								color="black"
							/>
						</div>
						<div className="relative">
							<img
								className=""
								src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66019a6b18d362a0dbd66fe7_Battery%20%2B%20Solar%20Graph-p-1080.png"
								alt=""
							/>
							<div className="absolute top-56 -left-10 md:top-96 md:-left-32 w-1/4 md:w-1/3">
								<img
									className="absolute"
									src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66019ed3a5aa0f74c6e6cb4d_Save%20(1).png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="advance-tracking h-[2900px] w-full bg-[#f1f1f1] relative overflow-hidden rounded-[40px]">
					<div className="blue-circle-bg z-[-1] bg-blue-circle-bg filter-custom-blue w-[350px] h-[350px] absolute inset-y-[-9%] inset-x-[9%]"></div>

					<div className="slight-bg z-[-2] opacity-[.17] bg-slight-bg w-full h-full absolute inset-0"></div>

					<div className="blurry-bg-images z-[-1] opacity-[.4] filter-saturate-178 filter-blur-36 bg-blurry-bg bg-no-repeat bg-[length:40%,auto,auto,100%] bg-center  w-full h-full absolute inset-0"></div>

					<div className="slight-bg-front z-[-1] opacity-[.99] filter-contrast-107-saturate-200 filter-blur-150 bg-slight-bg-front w-[130%] h-[113%] absolute inset-[-12%_0_0_-15%]"></div>

					<section
						id="why"
						className="section pt-[188px] pb-[188px] relative h-[3267.65px]"
					>
						<div className="container mx-auto">
							<div className="inner-container md:mx-32 mx-8  ">
								<div className="inner-container  ">
									<AdvancedTracking />
									<div className="bg-[#EEF4FD] md:w-[1304px] w-[600px] h-[1200px] md:h-[807px] rounded-3xl  place-content-center">
										<InDepthMonitoring />
									</div>

									<TypesOfEnergy />
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
