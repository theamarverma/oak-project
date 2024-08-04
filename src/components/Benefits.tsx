import React, { useState } from 'react';

import Live from './Live';
import Reporting from './Reporting';

const Benefits: React.FC = () => {
	const [activeComponent, setActiveComponent] = useState<string>('reporting'); // Default to 'reporting'

	const handleClick = (component: string) => {
		setActiveComponent(component);
	};

	const getButtonClasses = (component: string) => {
		return `p-2 h-12 w-44 rounded ${
			activeComponent === component ? 'bg-cyan-500' : 'bg-[#e3f3f8] text-black'
		}`;
	};

	return (
		<>
			<div className="bg-white h-screen mx-60">
				<div className="flex justify-center items-center mt-40 w-[1304px] h-[215px] ">
					<div className="flex flex-col items-center gap-4 text-black">
						<div className="font-mono">BENEFITS</div>
						<strong className="text-4xl">More than just Reporting.</strong>
						<p className="text-black flex-wrap w-1/2">
							OAK offers hassle-free, completely automated reporting for your
							electricity. With over 5 Years in energy management experience, we
							will not only report but provide you with actionable ways to save.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center mt-6">
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
				{activeComponent === 'reporting' && <Reporting />}
				{activeComponent === 'live' && <Live />}
			</div>
		</>
	);
};

export default Benefits;
