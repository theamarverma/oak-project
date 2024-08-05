import React, { useState } from 'react';
import Live from './Live';
import Reporting from './Reporting';

const Benefits: React.FC = () => {
	const [activeComponent, setActiveComponent] = useState<string>('reporting');

	const handleClick = (component: string) => {
		setActiveComponent(component);
	};

	const getButtonClasses = (component: string) => {
		return `p-2 h-12 w-36 sm:w-44 rounded ${
			activeComponent === component
				? 'bg-cyan-500 text-white'
				: 'bg-[#e3f3f8] text-black'
		}`;
	};

	return (
		<div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="flex flex-col items-center text-center">
				<div className="text-md sm:text-md font-mono text-gradient2">
					BENEFITS
				</div>
				<strong className="text-2xl sm:text-3xl md:text-4xl mt-4">
					More than just Reporting.
				</strong>
				<p className="text-gray-600 max-w-2xl mt-4">
					OAK offers hassle-free, completely automated reporting for your
					electricity. With over 5 years of experience in energy management, we
					provide actionable ways to save energy costs.
				</p>
			</div>
			<div className="flex justify-center items-center mt-6 gap-4">
				<button
					onClick={() => handleClick('reporting')}
					className={getButtonClasses('reporting')}
				>
					Reporting
				</button>
				<button
					onClick={() => handleClick('live')}
					className={getButtonClasses('live')}
				>
					Live
				</button>
			</div>
			<div className="mt-8 w-full max-w-4xl mx-auto">
				{activeComponent === 'reporting' ? <Reporting /> : <Live />}
			</div>
		</div>
	);
};

export default Benefits;
