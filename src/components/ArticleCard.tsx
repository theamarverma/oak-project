import React from 'react';

interface ArticleCardProps {
	title: string;
	category: string;
	desc: string;
	imageUrl: string;
}

const ArticleCard = ({ title, category, desc, imageUrl }: ArticleCardProps) => {
	return (
		<>
			<div className="flex flex-col md:min-h-[800px] min-w-[150px] md:min-w-[448px] bg-[#28292B] rounded-xl">
				<img
					className="rounded-t-xl md:min-h-[376px] w-full object-cover"
					src={imageUrl}
					alt="title"
				/>
				<div className="flex flex-col text-white gap-2 p-2 md:p-10">
					<div className="category  text-[#96A0AA]">{category}</div>
					<strong className="title md:text-3xl sm:text-sm"> {title}</strong>
					<p className="desc md:text-xl sm:text-xs text-wrap">{desc}</p>
				</div>
			</div>
		</>
	);
};

export default ArticleCard;
