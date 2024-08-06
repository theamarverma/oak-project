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
			<div className="flex flex-col max-w-[450px] bg-[#28292B] rounded-xl">
				<img
					className="rounded-t-xl"
					src={imageUrl}
					alt="title"
				/>
				<div className="flex flex-col text-white gap-2 p-10">
					<div className="category text-[#96A0AA]">{category}</div>
					<strong className="title text-4xl"> {title}</strong>
					<p className="desc text-xl text-wrap">{desc}</p>
				</div>
			</div>
		</>
	);
};

export default ArticleCard;
