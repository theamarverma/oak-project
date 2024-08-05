import React from 'react';

interface CardProps {
	title: string;
	desc: string;
	imageUrl: string;
	imgComp?: React.ReactNode;
	imgSize?: string;
	bg: string;
	titleColor?: string;
}

const Card = ({
	title,
	desc,
	imageUrl,
	imgComp,
	imgSize,
	bg,
	titleColor,
}: CardProps) => {
	return (
		<div
			className={`flex flex-col justify-between ${bg} rounded-xl p-6 shadow-lg w-full max-w-full md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]`}
		>
			<div className="flex flex-col gap-4">
				<strong className={`text-2xl ${titleColor}`}>{title}</strong>
				<p className="text-lg text-gray-600">{desc}</p>
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
	);
};

export default Card;
