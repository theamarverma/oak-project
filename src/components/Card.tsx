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
			className={`card w-[659px] h-[642px] ${bg} rounded-xl text-black gap-7 flex justify-center flex-col`}
		>
			<div className="flex justify-center flex-col gap-7 p-8">
				<strong className={`text-3xl ${titleColor}`}>{title}</strong>

				<p className="text-xl text-gray-500">{desc}</p>
			</div>
			<div className="parent relative mb-8">
				<img
					className={`object-cover ${imgSize} rounded-2xl`}
					src={imageUrl} // Using imageUrl from props
					alt="Card Image"
				/>

				<div className="child">
					{imgComp}
					{/* <img
						className="absolute right-5 top-6 border border-white"
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6508a103fb2e7ea2e2a87b19_OAK%20Alert%20Email%20Notif%203.webp"
						alt="Alert Notification"
						width={220}
						height={74}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default Card;
