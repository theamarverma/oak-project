import React from 'react';
import Card from './Card';

const CardWrapper = () => {
	return (
		<>
			<Card
				title="Real-time alerts notify you of any wastage:"
				subtitle="ZERO BUDGETS REQUIRED"
				leftContent={
					<p>
						This feature allows businesses to identify and address
						inefficiencies immediately, preventing unnecessary consumption and
						reducing costs. Each alert acts as an opportunity for savings,
						enabling you to make quick adjustments, such as turning off
						unnecessary lights or repairing malfunctioning equipment, leading to
						lower energy bills and improved operational efficiency. This
						immediate feedback loop not only helps in reducing overheads but
						also supports environmental sustainability goals by minimising
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
						A great energy management system will pay for itself within the
						first 18 months through the savings it helps you make while being
						affordable in the first place. We use a state-of-the-art AI &
						Machine Learning Algorithm alongside expert energy data analysts to
						identify energy waste within your site. Our members receive data
						analysis based on current and historical data to gain a competitive
						edge and improve efficiency. Here are some examples of how we've
						helped Oak members save costs with our EMS solution: Identified a
						way to optimise <strong>HVAC system saving</strong> a large office
						building
						<strong>˜£3,000</strong> per month
					</p>
				}
				rightContent={
					<div className="flex flex-col gap-2">
						<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
							<li>
								Spotted Misuse of CNCs in a UK Leading Manufacturer saving £300
								per week
							</li>
							<li>
								Optimised Cooling consumption of Hospitality Venue saving 32% on
								cooling
							</li>
							<li>
								Identified a malfunctioning HVAC system saving 22% of its total
								consumption after maintenance
							</li>
							<li>
								Shared Office Space reduced floor consumption by 29% due to OAK
								recommendations
							</li>
							<li>
								Reducing Total site consumption by 16% for a large logistics
								provider
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
						Simplify complex data with a single solution which can solve your
						energy goals: saving energy cost, providing compliance reporting,
						control & visibility of real-time consumption, energy tariff
						optimisation, tailored reporting, data-backed Capex Recommendations,
						financing and much more.{' '}
						<strong>Future-proof your energy and get ahead</strong> of the curve
						all while saving costs.
					</p>
				}
				rightContent={
					<div className="flex flex-col gap-2">
						<p>
							Fulfil your compliance reporting from an energy perspective as we
							automatically provide you with the required information you need
							to report on. This also includes per-unit reporting, which is
							required for certifications such as ISO50001. We can provide you
							relevant information for the following compliance reporting:
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
		</>
	);
};

export default CardWrapper;
