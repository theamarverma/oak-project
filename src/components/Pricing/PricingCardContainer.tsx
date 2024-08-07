import React from 'react';
import PricingCard from './PricingCard';

import CheckIcon from '@mui/icons-material/Check';
const PricingCardContainer = () => {
	const listItem1 = (
		<>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Save up to 3% in energy cost</span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Automated Compliance Reporting</span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Automated Performance Report </span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Automated Quarterly Report </span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Basic Recommendations </span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Benchmarking </span>
			</li>
		</>
	);
	const listItem2 = (
		<>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Compliance Reporting + </span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Save up to 7.5% in energy cost</span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Advanced Recommendations</span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Site Survey </span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Advanced Benchmarking </span>
			</li>
		</>
	);
	const listItem3 = (
		<>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Actionable Insights +</span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Access to Live Data</span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Save up to 30% in energy cost</span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Live Alerts & Notifications </span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Virtual Energy Manager</span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>In-Depth Appliance Analysis </span>
			</li>
			<li>
				<CheckIcon className="text-[#70F1FE]" />
				<span>Custom Alerting & Reporting </span>
			</li>
		</>
	);

	return (
		<>
			<div className="card-container md:mx-52 grid grid-cols-1 ml-2 md:grid-cols-3 gap-3 absolute inset-x-0 -top-40 ">
				<div className=" ">
					<PricingCard
						title="Compilance Reporting"
						listItem={listItem1}
						pricing="£99/month"
						textColor="text-black"
						bg="bg-white"
					/>
				</div>
				<div className=" ">
					<PricingCard
						title="Actionable Insights"
						listItem={listItem2}
						pricing="£199/month"
						textColor="text-black"
						bg="bg-white"
					/>
				</div>
				<div className="md:absolute -top-20 -right-0 md:mr-10">
					<PricingCard
						title="Live Monitoring"
						listItem={listItem3}
						pricing="£299/month"
						bg="bg-[#28292B]"
						textColor="text-white"
						priceColor="text-[#70F1FE]"
					/>
				</div>
			</div>
		</>
	);
};

export default PricingCardContainer;
