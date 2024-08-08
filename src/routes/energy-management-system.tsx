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
import Card from '../components/energy-management-system/Card';

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
				<div className="advance-tracking h-[4136px] md:h-[2900px] w-full bg-[#f1f1f1] relative overflow-hidden rounded-[40px]">
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
							<Card
								title="Real-time alerts notify you of any wastage:"
								subtitle="ZERO BUDGETS REQUIRED"
								leftContent={
									<p>
										This feature allows businesses to identify and address
										inefficiencies immediately, preventing unnecessary
										consumption and reducing costs. Each alert acts as an
										opportunity for savings, enabling you to make quick
										adjustments, such as turning off unnecessary lights or
										repairing malfunctioning equipment, leading to lower energy
										bills and improved operational efficiency. This immediate
										feedback loop not only helps in reducing overheads but also
										supports environmental sustainability goals by minimising
										unnecessary energy use.
									</p>
								}
								rightContent={
									<div className="flex flex-col gap-2">
										<strong>Types of Alerts:</strong>{' '}
										<ul>
											<li>Predictive maintenance</li>
											<li>Equipment left on</li>
											<li>Drop in equipment efficiency</li>
											<li>Procedures not held</li>
											<li>Behaviour improvements</li>
											<li>Appliance upgrades</li>
											<li>Optimisation based on Agile Tariff & Generation</li>
										</ul>
									</div>
								}
							/>
							<Card
								imgSrc="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66019ed3a5aa0f74c6e6cb4d_Save%20(1).png"
								title="Reduce Costs"
								subtitle="ZERO BUDGETS REQUIRED"
								leftContent={
									<p>
										A great energy management system will pay for itself within
										the first 18 months through the savings it helps you make
										while being affordable in the first place. We use a
										state-of-the-art AI & Machine Learning Algorithm alongside
										expert energy data analysts to identify energy waste within
										your site. Our members receive data analysis based on
										current and historical data to gain a competitive edge and
										improve efficiency. Here are some examples of how we've
										helped Oak members save costs with our EMS solution:
										Identified a way to optimise{' '}
										<strong>HVAC system saving</strong> a large office building
										<strong>˜£3,000</strong> per month
									</p>
								}
								rightContent={
									<div className="flex flex-col gap-2">
										<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
											<li>
												Spotted Misuse of CNCs in a UK Leading Manufacturer
												saving £300 per week
											</li>
											<li>
												Optimised Cooling consumption of Hospitality Venue
												saving 32% on cooling
											</li>
											<li>
												Identified a malfunctioning HVAC system saving 22% of
												its total consumption after maintenance
											</li>
											<li>
												Shared Office Space reduced floor consumption by 29% due
												to OAK recommendations
											</li>
											<li>
												Reducing Total site consumption by 16% for a large
												logistics provider
											</li>
										</ul>
									</div>
								}
							/>
							<Card
								imgSrc="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6614e85e6c2de07da0572af4_Iso_50001_logo.svg"
								title="All in One Solution, solving compliance needs too."
								subtitle="ZERO BUDGETS REQUIRED"
								leftContent={
									<p>
										Simplify complex data with a single solution which can solve
										your energy goals: saving energy cost, providing compliance
										reporting, control & visibility of real-time consumption,
										energy tariff optimisation, tailored reporting, data-backed
										Capex Recommendations, financing and much more.{' '}
										<strong>Future-proof your energy and get ahead</strong> of
										the curve all while saving costs.
									</p>
								}
								rightContent={
									<div className="flex flex-col gap-2">
										<p>
											Fulfil your compliance reporting from an energy
											perspective as we automatically provide you with the
											required information you need to report on. This also
											includes per-unit reporting, which is required for
											certifications such as ISO50001. We can provide you
											relevant information for the following compliance
											reporting:
										</p>
										<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
											<li>ESOS</li>
											<li>SECR</li>
											<li>ISO 50001</li>
											<li>And more...</li>
										</ul>
									</div>
								}
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
