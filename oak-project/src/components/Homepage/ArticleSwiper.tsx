import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCallback, useState } from 'react';
import ArticleCard from './ArticleCard';
import { Button } from 'primereact/button';

// Example ArticleCard component

export const ArticleSwiper = () => {
	const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

	const handlePrevious = useCallback(() => {
		swiperRef?.slidePrev();
	}, [swiperRef]);

	const handleNext = useCallback(() => {
		swiperRef?.slideNext();
	}, [swiperRef]);

	return (
		<>
			<div className="bg-[#151418] h-full  w-full">
				<div className="text-white ml-10 md:ml-48 pt-60">
					<h4 className="font-semibold font-mono tracking-wider text-[#03EFFE]">
						ARTICLE & NEWS
					</h4>

					<div className="flex flex-col md:flex-row justify-between gap-4 mb-10">
						<h1 className=" left ml-14 mt-6 text-4xl">
							Browse our latest articles
						</h1>
						<div className="right">
							<div className="hidden md:flex gap-8 mr-40">
								<div>
									<Button
										className="w-16 h-16 bg-transparent hover:bg-[#41c9e8] border border-white "
										icon="pi pi-arrow-left"
										onClick={handlePrevious}
									></Button>
								</div>
								<div>
									<Button
										className="w-16 h-16 bg-[#1FD5FE] "
										icon="pi pi-arrow-right"
										onClick={handleNext}
									></Button>
								</div>
							</div>
						</div>
					</div>

					<Swiper
						onSwiper={setSwiperRef}
						slidesPerView="auto"
						spaceBetween={16}
						breakpoints={{
							576: {
								// width: 576,
								slidesPerView: 2,
							},
							768: {
								// width: 768,
								slidesPerView: 1,
							},
						}}
						scrollbar={{ draggable: true }}
						loop={true}
					>
						<SwiperSlide>
							<div className="flex md:grid grid-cols-3 gap-4 ">
								<ArticleCard
									title="What are Scope 1, Scope 2, and Scope 3 Emissions?"
									category="Energy"
									desc="Scope 1, 2, and 3 emissions: measure your company's environmental impact. Reduce emissions and save money!"
									imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f4595b1/6633a70935219a655524a6fe_power-station-374097_1280.jpg"
								/>
								<ArticleCard
									title="What you need to know about Sustainable Finance Disclosure Regulation (SFDR)"
									category="Energy Management"
									desc="SFDR (transparency, labelling, info) affects investment firms for sustainable through strict compliance measures!"
									imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f4595b1/667d52cfc068c49afb1c4255_10.png"
								/>
								<ArticleCard
									title="Corporate Sustainability Reporting Directive (CSRD) Explained"
									category="Energy Management"
									desc="New EU law (CSRD) requires wider sustainability reporting. Businesses must consider ESG factors seriously!"
									imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f4595b1/6670498ae6b181f96b028cfb_7.png"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex md:grid grid-cols-3 gap-4 ">
								<ArticleCard
									title="ESG Reporting: Everything Businesses Need to Know"
									category="Energy"
									desc="New EU & UK regs mandate ESG reporting. Gain a competitive edge with reliable energy data for credible reports!"
									imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f4595b1/6633a70935219a655524a6fe_power-station-374097_1280.jpg"
								/>
								<ArticleCard
									title="Energy Management Services to Save Costs & Carbon Emissions"
									category="Energy Management"
									desc="UK &amp; Europe businesses: Free energy savings estimate from OAK cuts energy bills &amp; helps reduce environmental impact!"
									imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f4595b1/66471f3244561bdfb8e5d70a_Untitled%20design%20(1).png"
								/>
								<ArticleCard
									title="How Predictive Maintenance Can Revolutionise Your Energy Management"
									category="Energy Management"
									desc="Predictive maintenance cuts energy costs & extends equipment life by identifying potential failures before they happen"
									imageUrl="https://cdn.prod.website-files.com/64ff275e33673d684f4595b1/65d74f5c0baa9e3bd59a0764_solar%20panels%201.png"
								/>
							</div>
						</SwiperSlide>
						{/* Add more SwiperSlide components with more cards as needed */}
					</Swiper>
					<div className=" md:hidden flex mt-5 justify-center items-center w-full gap-8 mr-40">
						<div>
							<Button
								className="w-16 h-16 bg-transparent hover:bg-[#41c9e8] border border-white "
								icon="pi pi-arrow-left"
								onClick={handlePrevious}
							></Button>
						</div>
						<div>
							<Button
								className="w-16 h-16 bg-[#1FD5FE] "
								icon="pi pi-arrow-right"
								onClick={handleNext}
							></Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
