// import React from 'react';

import Button from './Button';
import Reporting from './Reporting';

const Benefits = () => {
	return (
		<>
			<div className="bg-white h-screen mx-60">
				<div className="flex justify-center items-center mt-72 w-[1304px] h-[215px] ">
					<div className="flex flex-col items-center gap-4 text-black">
						<div className="font-mono">BENEFITS</div>
						<strong className="text-3xl">More than just Reporting.</strong>
						<p className="text-black flex-wrap w-1/2">
							OAK offers hassle-free, completely automated reporting for your
							electricity. With over 5 Years in energy management experience we
							will not only report but provide you actionable ways to save.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center mt-6">
					<button className="bg-cyan-500 p-2 h-12 w-44 rounded-lg">
						Reporting
					</button>
					<button className="bg-cyan-500 p-2 h-12 w-40 rounded-lg">Live</button>
				</div>
				<Reporting />
			</div>
		</>
	);
};

export default Benefits;
