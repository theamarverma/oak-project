import React from 'react';
import {
	Accordion as NextUIAccordion,
	AccordionItem,
	divider,
} from '@nextui-org/react';

const QnA = () => {
	const defaultContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
	const first =
		'The OAK Network is a subscription-based energy optimisation platform.';
	const second =
		'OAK Network is suitable for those who want to have a comprehensive understanding of their energy consumption and manage it effectively, regardless of their intention to reduce or simply comprehend it. Our platform is tailored to meet the needs of small to medium-sized enterprises in various industries, including hospitality, retail, manufacturing, and education. By using our dashboard, you can eliminate the errors and assumptions associated with estimated bills and monitor your energy consumption precisely on a real-time basis.';
	const third =
		'OAK sensors collect the data directly from your electricity fuse board. This data allows us to derive consumption patterns based on time of use, volume, and statistical business data, providing a comprehensive energy management service. With this data, we can identify areas where you can reduce your consumption to achieve savings, assess appliance health, recommend clean tech or upgrades based on ROI, and much more. Our system also alerts you to left-on appliances, power cuts, load imbalance, and other issues. Discover how our energy management service works in practice by reading one of our case studies.';
	const fourth = (
		<>
			<div>
				<strong>ANNUAL MEMBERSHIP</strong>
				<p>
					The OAK Annual Membership is a fully paid upfront option that offers
					the most cost-effective pricing.
				</p>
			</div>
			<div className="mt-4">
				<strong> MONTHLY MEMBERSHIP</strong>
				<p>
					The OAK monthly Membership offers a high level of flexibility,
					allowing you to cancel at any time after the minimum term of 3 months.
					This gives you the freedom to try out our services and see how they
					benefit your business without any long-term commitment.
				</p>
			</div>
		</>
	);
	const fifth =
		'The OAK Network provides businesses with a clear and transparent understanding of their energy usage through a live online dashboard. Additionally, we offer monthly insights detailing what, when, and how energy is being used or wasted. Our aim is to help your business identify opportunities to reduce energy costs.';
	const sixth =
		'At OAK, we have designed a simple step-by-step onboarding process for our clients. To get started, you only need to provide us with some basic business information, copies of your last 3 months’ electricity bills, and pictures of your meter(s) and Distribution Boards. We will also arrange a call with one of our representatives to answer any questions you may have.';
	const seventh =
		'Yes, our aim is to help businesses reduce and optimise their energy consumption while achieving carbon neutrality through microgeneration and storage. Green generation plays a crucial role in achieving this goal. Our dashboard will recommend the most suitable clean tech based on your consumption data.';
	const itemClasses = {
		content: 'text-xl ',
		title: 'text-2xl font-bold',
	};
	return (
		<>
			<div className=" gap-4">
				<NextUIAccordion
					itemClasses={itemClasses}
					variant="splitted"
				>
					<AccordionItem
						className="mb-4"
						key="1"
						aria-label="Accordion 1"
						title="What is the OAK network"
					>
						{first}
					</AccordionItem>

					<AccordionItem
						className="mb-4"
						key="2"
						aria-label="Accordion 2"
						title="Who is OAK network for ?"
					>
						{second}
					</AccordionItem>

					<AccordionItem
						className="mb-4"
						key="3"
						aria-label="Accordion 3"
						title="How does the OAK network tech work ?"
					>
						{third}
					</AccordionItem>

					<AccordionItem
						className="mb-4"
						key="4"
						aria-label="Accordion 3"
						title="How can I pay for the service ?"
					>
						{fourth}
					</AccordionItem>
				</NextUIAccordion>
				<NextUIAccordion
					itemClasses={itemClasses}
					variant="splitted"
				>
					<AccordionItem
						className="mb-4"
						key="5"
						aria-label="Accordion 3"
						title="What does the OAK network do ?"
					>
						{fifth}
					</AccordionItem>

					<AccordionItem
						className="mb-4"
						key="6"
						aria-label="Accordion 3"
						title="How do I join the OAK network ?"
					>
						{sixth}
					</AccordionItem>

					<AccordionItem
						className="mb-4"
						key="7"
						aria-label="Accordion 3"
						title="Is the OAK network compatible with solar/wind and other clean tech ?"
					>
						{seventh}
					</AccordionItem>
				</NextUIAccordion>
			</div>
		</>
	);
};

export default QnA;
