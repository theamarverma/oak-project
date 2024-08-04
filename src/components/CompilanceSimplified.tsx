import React from 'react';
import Button from './Button';

const CompilanceSimplified: React.FC = () => {
	return (
		<>
			<div className="container grid grid-cols-2 w-[1304px] h-[900px] mx-60 p-12 gap-5">
				<div className="left my-14 flex flex-col gap-3 p-9">
					<div className="text-md font-mono">COMPLIANCE SIMPLIFIED</div>
					<div className="text-5xl leading-[60px] font-semibold">
						Automate your Energy Reporting to save valuable time and resources
					</div>
					<p className="text-gray-500 leading-8">
						With increasing regulations, more and more businesses are required
						by law to comply with sustainability reporting. Part of the
						mandatory ESG compliance regulation in the EU is energy reporting &
						reduction strategy. This is what OAK has specialized in and
						automates for you, starting at £99 / month.
					</p>
					<Button
						title="Get Started"
						varient="py-6 px-10"
					/>
				</div>
				<div className="right">
					<img
						className="object-cover rounded-xl"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/669e6cc12e7c060ad69b1250_Screenshot%202024-07-22%20at%2016.28.38-p-500.png"
						alt="Screenshot of the compliance tool"
					/>
				</div>
			</div>
		</>
	);
};

export default CompilanceSimplified;
