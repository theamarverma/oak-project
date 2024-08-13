import React from 'react';
import Benefits from './Benefits';
import Button from '../Button/Button';
import InDepthMonitor from './InDepthMonitor';
import ComplianceSimplified from './ComplianceSimplified';
import Modal from './Modal';
// import { Play } from 'lucide-react';
import Partners from './Partners';
import Demo from './Demo';
// import Article from './Article';
import { ArticleSwiper } from './ArticleSwiper';
import Footer from './Footer';

const Body: React.FC = () => {
	return (
		<>
			<div className="bg-black">
				<div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center text-center gap-4 py-12">
						<strong className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mt-40">
							Automated Energy Reporting from £99/month
						</strong>
						<div className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
							OAK does all the data compiling and analysis for your compliance
							reporting related to energy! We help you achieve your compliance
							requirements, all whilst saving you money! With OAK, your business
							can save up to 30% in energy costs.
						</div>
						<div className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
							Book a Demo now to learn more, or why not use our Compliance
							Requirement Tool to discover what measures/legislation you may
							need to report on?
						</div>
						<div className="mt-6">
							<Button
								title="Book a Demo"
								color="black"
								icon="pi pi-arrow-up-right"
								css=" bg-[#21D5FE] w-48 h-16 font-bold p-8 rounded-lg"
							/>
						</div>
					</div>
				</div>
				<div className="relative p-10 flex flex-col md:flex-row items-center justify-center mt-12  md:mt-24">
					<img
						className="object-cover w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651b2a0448f71021552f9842_OAK%20Network%20Hero%20Image-p-1080.webp"
						alt="Main Image"
					/>
					<img
						className="absolute -top-28 right-80 w-32 h-32 md:w-48 md:h-48 md:z-10 rounded-lg hidden md:block"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66aba0c6621b06f03479a4d4_Consumption%20per%20unit-p-500.png"
						alt="Top-Right Image"
					/>
					<img
						className="absolute left-64 w-40 h-40 md:w-72 md:h-56 md:z-10 rounded-lg hidden md:block"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66ab9ef08a88240ab65739b7_Screenshot%202024-08-01%20at%2016.42.48-p-500.png"
						alt="Bottom-Left Image"
					/>
				</div>
			</div>

			<div className="bg-[#ced6da] text-black">
				<div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<ComplianceSimplified />
					<InDepthMonitor />
				</div>
			</div>

			<div className="bg-white mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-12">
				<Benefits />
			</div>

			<div className=" sm:px-6 lg:px-8 py-12 rounded-b-2xl bg-[#dbecf4]">
				<Modal />
			</div>
			<div className="w-full overflow-hidden bg-white md:p-8 p-2">
				<Partners />
			</div>
			<Demo />
			<ArticleSwiper />
			<Footer />
		</>
	);
};

export default Body;
