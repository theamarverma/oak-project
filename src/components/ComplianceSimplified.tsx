import React from 'react';
import Button from './Button';

const ComplianceSimplified: React.FC = () => {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="flex flex-col gap-4">
					<div className="text-sm sm:text-md font-mono text-gray-700">
						COMPLIANCE SIMPLIFIED
					</div>
					<div className="text-3xl sm:text-4xl md:text-5xl leading-snug font-semibold text-gray-900">
						Automate your Energy Reporting to save valuable time and resources
					</div>
					<p className="text-gray-500 leading-8">
						With increasing regulations, more and more businesses are required
						by law to comply with sustainability reporting. Part of the
						mandatory ESG compliance regulation in the EU is energy reporting &
						reduction strategy. This is what OAK has specialized in and
						automates for you, starting at £99 / month.
					</p>
					<div className="mt-4">
						<Button
							title="Get Started"
							btnSize="py-4 px-8"
						/>
					</div>
				</div>
				<div className="flex justify-center md:justify-end">
					<img
						className="object-cover rounded-xl w-full max-w-lg"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/669e6cc12e7c060ad69b1250_Screenshot%202024-07-22%20at%2016.28.38-p-500.png"
						alt="Screenshot of the compliance tool"
					/>
				</div>
			</div>
		</div>
	);
};

export default ComplianceSimplified;
