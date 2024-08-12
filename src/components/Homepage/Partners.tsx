import React from 'react';

const Partners = () => {
	return (
		<>
			<h1 className="flex justify-center items-center mt-5 md:mt-2 font-semibold text-4xl">
				Partners
			</h1>
			<div className="grid grid-cols-3 md:grid-cols-6 md:p-16 p-8 gap-16 items-center grayscale w-full mx-2 md:mr-10">
				<img
					className="min-w- md:w-full "
					src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6509c7a8653884bf52af4f94_IMG_062D94387ADD-1-p-500.jpeg"
					alt="synerLeap"
				/>
				<img
					className=""
					src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6502ff1418aab6dd711009c5_greentech%20partner%20logo.webp"
					alt="greentech"
				/>
				<img
					className=""
					src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6502ff145aa9cdd684a0690c_ORB%20Member%20Partner%20Logo.webp"
					alt="orb"
				/>
				<img
					src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6502ff14a3d8f08049fd9eb3_Responsible%20Alpha%20partner%20logo.webp"
					alt="Responsible Alpha"
				/>
				<img
					src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6502ff143523a3b6cf9e81dc_green%20net%20zero%20partner%20logo.webp"
					alt="net-zero"
				/>
				<img
					src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/6502ff1472a4d48f227de537_west%20london%20partner%20logo-p-500.webp"
					alt="westLondon"
				/>
			</div>
		</>
	);
};

export default Partners;
