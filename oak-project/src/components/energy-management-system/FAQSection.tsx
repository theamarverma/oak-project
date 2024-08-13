import React from 'react';

const FAQSection: React.FC = () => {
	return (
		<>
			<div className="flex flex-col gap-3">
				<h3 className="font-bold text-2xl">
					What is the difference between EMS and Scada?
				</h3>
				<p>
					A SCADA (Supervisory Control and Data Acquisition system) is primarily
					used for monitoring and controlling real-time data, whereas an EMS
					uses the data generated by a SCADA for analysis. However, an EMS has a
					broader scope and focuses on managing energy consumption across
					organizations.
				</p>

				<h3 className="font-bold text-2xl">
					What is ISO 50001 energy management system?
				</h3>
				<div className="text-block-copy">
					A ISO50001 energy management system is an EMS that collects the
					required information to fulfill the reporting requirements of
					ISO50001, this is not a specific system. ISO50001 requires a few set
					KPIs to be reported along with action plans to improve energy
					efficiency.
					<br />
					OAK provides the necessary information to comply with certifications
					like ESOS, SECR, ISO 50001, ISO 14001. This includes key information
					like Peak hours, Peak consumption, average consumption, consumption of
					your SEU (Significant Energy Users), Total CO2, CO2 per Unit, etc.
					<br />
					Guiding your journey to net zero as well as controlling the
					operational costs which are incurred. OAK is the practical way to do
					EMS (Energy Management System) as we analyze and dig deep into the
					data to find the most valuable action items for you to take forward.
				</div>
				<h3 className="font-bold text-2xl">
					What are the 3 parts of energy management?
				</h3>
				<div>
					<ul style={{ listStyleType: 'disc', paddingLeft: '30px' }}>
						<li className="list-item-3-copy">
							<strong>Gateway or Hub:</strong> which collects data from the
							machine or main meter
						</li>
						<li className="list-item-3-copy">
							<strong>Software:</strong> This is where the analysis happens,
							these are all the algorithms in the background which allow you to
							take informed decisions.
						</li>
						<li className="list-item-3-copy">
							<strong>Platform:</strong> a platform that enables users to
							visualize the data being collected as well as receive the
							information in a format so that they can best decide on how to
							take action, this includes historical data, KPIs, targets,
							recommendations, etc.
						</li>
					</ul>
				</div>
				<h3 className="font-bold text-2xl">
					Are energy management systems worth it?
				</h3>
				<div>
					{' '}
					<div className="text-block-copy">
						The benefits of an EMS far outweigh the investment costs. Studies
						conducted by the Carbon Trust indicate that for every £1 invested in
						an EMS, businesses can expect an average return of £4 to £6, which
						is beyond amazing. Moreover, the{' '}
						<strong>long-term cost savings</strong> achieved through reduced
						energy consumption and improved efficiency can turn out to be
						potential game-changers for your business.
					</div>
				</div>

				<div className="">
					<h3 className="font-bold text-2xl">
						What are the problems with energy management?
					</h3>
					<strong>Actionable Insights:</strong>{' '}
					<p>
						The usual problem with Energy management is to identify the actual
						action to take to optimize the consumption. Most EMS specialize in
						identifying anomalies but not in the precise action on what to do to
						reduce it.
					</p>
					<br />
					<strong>Granularity:</strong>{' '}
					<p>
						Many EMS systems are not able to identify the root cause as they are
						reliant on the smart meter data or just main meter consumption, this
						does not allow them to understand the consumption of equipment.
					</p>
					<br />
					<strong>Limited resources to monitor alarms:</strong> Alarms are a
					huge benefit of EMS however there can be hundreds of alarms across
					your portfolio, this usually causes confusion and irritation as not
					every alarm is accurate.
				</div>
			</div>
		</>
	);
};

export default FAQSection;