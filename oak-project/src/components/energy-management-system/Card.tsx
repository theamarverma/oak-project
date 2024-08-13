import { Divider } from '@nextui-org/react';
import React from 'react';

interface CardProps {
	title: string;
	subtitle: string;
	imgSrc?: string;
	imgAlt?: string;
	imgClass?: string;
	leftContent: React.ReactNode;
	rightContent: React.ReactNode;
	titleWeight?: 'font-bold';
}

const Card: React.FC<CardProps> = ({
	title,
	subtitle,
	// Default image position
	leftContent,
	rightContent,
	titleWeight = '',
	imgSrc = '',
	imgAlt = '',
	imgClass = '',
}) => (
	<>
		<div className=" md:mx-auto md:max-w-7xl rounded-2xl mx-4 p-2 md:p-0  bg-white md:min-h-[700px] ">
			<div className="card-larger-card-content p-4  md:px-36 md:py-24">
				<div className="flex flex-col gap-7 items-start ">
					<strong className="capitalize font-mono md:text-lg tracking-wider text-[#06EEFE]">
						{subtitle}
					</strong>
					<div className="flex justify-between w-full">
						<h1 className={`title text-3xl md:text-4xl ${titleWeight}`}>
							{title}
						</h1>

						<img
							src={imgSrc}
							alt={imgAlt}
							className={`w-[90px] grayscale image ${imgClass} ${imgSrc ? 'visible' : 'invisible'}`}
						/>
					</div>

					<Divider />

					<div className="grid grid-cols-2 gap-8">
						<div className="left md:text-xl md:text-left">{leftContent}</div>
						<div className="right md:text-xl md:text-left">{rightContent}</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default Card;
