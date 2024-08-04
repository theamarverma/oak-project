import React from 'react';
import Card from './Card';

const Live: React.FC = () => {
	const ImageComp = (
		<div>
			<img
				className="absolute right-12 top-10 "
				src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65268b5a6ed1035b12a41eab_OAK%20Alert%20Email%20Notif%202.webp"
				alt="Alert Notification"
				width={220}
				height={74}
			/>
			<img
				className="absolute right-20 bottom-20 "
				src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/65268a9edc5ceebc368f2477_OAK%20Alert%20Email%20Notif%202.webp"
				alt="Alert Notification"
				width={220}
				height={74}
			/>
		</div>
	);

	const SingleImageComp = (
		<img
			className="absolute right-5 top-6 border border-white"
			src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6508a103fb2e7ea2e2a87b19_OAK%20Alert%20Email%20Notif%203.webp"
			alt="Alert Notification"
			width={220}
			height={74}
		/>
	);
	const BottomImageComp = (
		<img
			className="absolute -right-5 -bottom-20 rounded-xl"
			src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651c07be6e86b99679f53524_OAK%20Multi%20Site%20Accent-p-500.webp"
			alt="Highlighted Sites"
			width={350}
			height={230}
		/>
	);
	return (
		<>
			<div className="w-[1304px] grid grid-cols-2  mt-9 gap-8">
				<Card
					title="All the Reporting+ benefits"
					desc="Our esteemed multi-site clients benefit from the entire feature
							set of the single-site plans."
					imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6669a54f74210d019bd6f294_Screenshot%202024-06-12%20at%2015.40.26-p-800.png"
					bg="bg-[#28292b]"
					titleColor="text-white"
					imgComp={ImageComp}
					imgSize="w-[440px]  h-[310px] ml-8"
				/>
				<Card
					title="‍Site Performance Reports Monthly, Quarterly and Annualy"
					desc="We deliver a bespoke analysis of your site, deep diving into each
							appliance to identify energy savings potential and optimization
							opportunity. All while providing you with necessary compliance &
							performance reporting delivered directly to your email inbox."
					imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6526a7aa3028387e5d5c31b9_Oak%20Load%20Curve-p-800.webp"
					bg="bg-[#28292b]"
					titleColor="text-white mt-12"
					imgComp={SingleImageComp}
					imgSize="h-[340px] w-full "
				/>

				<Card
					title="Predictive Maintenance"
					desc="Get notifications when your equipment needs maintenance to prevent unexpected costly breakdowns potentially causing thousands of £££ in lost revenue."
					imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/66027dfa52ef17afb58b3678_Fridge%20with%20Notification%20%26%20Dashboard-p-500.png"
					bg="bg-[#eff4f8]"
					titleColor="text-black"
				/>
				<Card
					title="A Tailored Dashboard to meet different needs"
					desc="Management & operations receive their separate accounts so management gets clear oversight while operations deals with the day-to-day insights."
					imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/661cfa8f38335890fd872b09_Screenshot%202024-04-15%20at%2011.59.37-p-800.png"
					bg="bg-[#28292b]"
					titleColor="text-white"
					imgSize="w-[571px]  h-[300px] ml-8 "
				/>
				<Card
					title="Excessive Usage Alerts"
					desc="Receive alerts whenever your consumption exceeds normal levels and keep up-to-date with the performance of your business."
					imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6508958a8edc562046794753_Screenshot%202023-09-18%20at%2020.23.00-p-500.png"
					bg="bg-[#0ce7fe]"
					titleColor="text-black"
					imgSize="w-[425px]  h-[308px] ml-2 "
					imgComp={ImageComp}
				/>
				<Card
					title="Equipment Monitoring"
					desc="Monitor individual appliances and identify inefficiencies throughout your business."
					imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651bffdb4d6195a65db03d62_OAK%20Runtime%20Analysis-p-500.webp"
					bg="bg-[#28292b]"
					titleColor="text-white"
					imgSize="w-[571px]  h-[300px] ml-8 "
				/>
				<Card
					title="Multi-Site Comparison"
					desc="Central Dashboard to manage all of your portfolios in one place."
					imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f459532/651c072dd7519f80b61aab89_OAK%20Sites%20and%20Graphs-p-800.webp"
					bg="bg-[#eff4f8]"
					imgSize="w-[700px] h-[328px] p-2"
					imgComp={BottomImageComp}
				/>
				<Card
					title="‍Open API"
					desc="Improve your current system's capabilities by integrating with OAK's powerful API."
					imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixid=M3w0ODMyOTN8MHwxfHNlYXJjaHwxNnx8Y29kaW5nfGVufDB8fHx8MTY5NTI5OTU0MXww&ixlib=rb-4.0.3&fit=clamp&auto=format&w=2000"
					bg="bg-[#28292b]"
					titleColor="text-white mt-12"
					imgSize="h-[430px] w-full "
				/>
			</div>
		</>
	);
};

export default Live;
