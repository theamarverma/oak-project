import { createFileRoute } from '@tanstack/react-router';
import '../index.css';

export const Route = createFileRoute('/energy-management-system')({
	component: EnergyManagementSystem,
});

import React from 'react';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import AdvancedTracking from '../components/energy-management-system/AdvancedTracking';
import InDepthMonitoring from '../components/energy-management-system/InDepthMonitoring';
import TypesOfEnergy from '../components/energy-management-system/TypesOfEnergy';

import CardWrapper from '../components/energy-management-system/CardWrapper';

import BenefitsCard from '../components/energy-management-system/BenefitsCard';
import FAQSection from '../components/energy-management-system/FAQSection';

import Footer from '../components/Homepage/Footer';
import { ArticleSwiper } from '../components/Homepage/ArticleSwiper';

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
				<div className="advance-tracking h-[4136px] md:h-[2900px] w-full bg-[#f1f1f1] relative overflow-hidden">
					<div className="z-[-1] w-[350px] h-[350px] absolute inset-y-[-9%] inset-x-[9%]  contrast-[133%] saturate-[178%] blur-3xl"></div>

					<div className="z-[-2] opacity-[0.17] bg-[#ffffffc9] bg-[linear-gradient(4deg,_#ffffff8f,_#98f9ff00_76%),_linear-gradient(21deg,_#dc2b2b33,_#fff0_51%),_linear-gradient(211deg,_#4eacfe80,_#fff0_27%),_linear-gradient(#fff,_#ecf2ff00_26%)] w-full h-full absolute inset-0"></div>

					<div className=" z-[-1] opacity-[0.4] saturate-[178%] blur-lg w-full h-full absolute inset-0 bg-no-repeat bg-[url('https://cdn.prod.website-files.com/64ff275…/651b596…_OAK%20Recent%20Alerts.webp'),_url('https://cdn.prod.website-files.com/64ff275…/650a655…_OAK%20Thumbnail.jpeg'),_url('https://cdn.prod.website-files.com/64ff275…/651b43e…_OAK%20Dashboard.webp'),_url('https://cdn.prod.website-files.com/64ff275…/651b579…_OAK%20Alert%20Graph.webp')] bg-[50%,50%_100%,50%_0,50%] bg-[40%,auto,auto,100%]"></div>

					<div className="z-[-1] opacity-[0.99] contrast-[107%] saturate-[200%] blur-lg bg-[linear-gradient(#dadee0d6,_#ffffffab_28%,_#93a4ad4d)] w-[130%] h-[113%] absolute inset-y-[-12%] inset-x-[-15%]"></div>

					<section
						id="why"
						className="section pt-[188px] pb-[188px] relative h-[3267.65px]"
					>
						<div className="container mx-auto">
							<div className="inner-container md:mx-32 mx-8  ">
								<div className="inner-container  ">
									<AdvancedTracking />
									<div className="bg-[#EEF4FD] md:w-[1304px] h-[1200px] md:h-[807px] rounded-3xl  place-content-center">
										<InDepthMonitoring />
									</div>

									<TypesOfEnergy />
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="benefits-section">
				<section className="section pt-0 pb-10  h-full bg-neutral-200">
					<div className="container-default mx-auto">
						<h2 className="text-4xl mb-8 text-center pt-10">
							Benefits of an EMS
						</h2>
						<div className="flex flex-col gap-4">
							<CardWrapper />
						</div>
					</div>
				</section>
				<div className="h-full ">
					<div className="flex flex-col justify-center items-center md:mx-96 mx-8 my-60">
						<div className="flex flex-col gap-4 justify-center text-center max-w-3xl p-10">
							<strong className="tracking-wide">BENEFITS</strong>{' '}
							<h1 className="text-3xl font-semibold">
								Manage Your Energy Usage with Real-Time Data With Real-time data
							</h1>
							<p>
								it takes all the guess work out of the picture, as you can now
								make decisions based on live consumption. At OAK, we take care
								of all the data crunching for you so that you can focus on
								taking action to improve energy efficiency, save on energy costs
								and ensure optimal operation of your site with ease of mind.
							</p>
						</div>

						<div className="mt-5 flex flex-col md:flex-row gap-8 ">
							<BenefitsCard
								titleColor="text-white"
								title="Live Overview of your consumption"
								desc="With OAK, you will know exactly how much energy is being consumed by each venue of your business down to the equipment within that venue. Providing you a digital twin of your business and leaving no stone unturned. We also provide live alerting based on our AI algorithm which identifies and notifies you of anomalies and what is the most likely cause with a proposed action."
								imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6601812e621cb13c0e74bf2f_Laptop%20with%20Alert.png"
								bg="bg-[#28292B]"
								imgSize="w-full h-auto "
							/>
							<BenefitsCard
								titleColor="text-black"
								title="Make informed decisions where to invest"
								desc="Accurate Real-time data provides the foundation for data backed decisions, not only for improving efficiency but also for CAPEX upgrades. This includes everything from: Solar panels, voltage optimiser, LED, Battery storage, Heat pumps etc. We provide you with the data to make the right decision for your business along with financing options to make your ESG journey more budget friendly."
								imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6526952c8e0e6553b65202c3_IMG_4160.jpg"
								bg="bg-[#EFF4F8]"
								imgSize="w-full h-auto "
							/>
						</div>

						<div className="tracking-wider text-lg font-bold  mt-32">FAQ</div>
						<div className="text-4xl font-bold mt-8 mb-10">FAQ about EMS</div>
						<FAQSection />
					</div>
				</div>
			</div>
			<ArticleSwiper />
			<Footer />
		</>
	);
}
