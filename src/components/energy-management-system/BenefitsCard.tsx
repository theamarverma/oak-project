import React from 'react';

interface BenefitsCardProps {
	title: string;
	desc: string;
	imageUrl: string;
	imgComp?: React.ReactNode;
	imgSize?: string;
	bg: string;
	titleColor?: string;
}

const BenefitsCard = ({
	title,
	desc,
	imageUrl,
	imgComp,
	imgSize,
	bg,
	titleColor,
}: BenefitsCardProps) => {
	return (
		<div className="container">
			<div className={`flex flex-col ${bg} rounded-xl p-6 shadow-lg  `}>
				<div className="flex flex-col gap-4">
					<strong className={`text-2xl ${titleColor}`}>{title}</strong>
					<p className="text-lg text-gray-500">{desc}</p>
				</div>
				<div className="relative mt-4">
					<img
						className={`object-cover ${imgSize} rounded-lg`}
						src={imageUrl}
						alt="Card Image"
					/>
					<div className="absolute inset-0 flex items-center justify-center">
						{imgComp}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BenefitsCard;
