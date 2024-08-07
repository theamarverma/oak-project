import { createFileRoute } from '@tanstack/react-router';
import '../index.css'; // Ensure this imports the file where Tailwind is setup
import Header from '../components/Header';
import PricingCardContainer from '../components/Pricing/PricingCardContainer';
import Accordion from '../components/Pricing/Accordion';
import Footer from '../components/Footer';

export const Route = createFileRoute('/pricing')({
	component: Pricing,
});

export default function Pricing() {
	return (
		<>
			<div className="bg-black">
				<Header />
				<div className="md:min-h-[800px] min-h-[700px] w-full flex justify-center items-center text-white">
					<div className="md:w-1/2 flex flex-col text-center gap-4 p-2 md:mb-4">
						<strong className="md:text-7xl text-5xl p-4 md:p-8 ">
							Pricing, tailored to your business needs.
						</strong>
						<p className="text-xl">
							No matter the number of sites and office locations, OAK flexibly
							scales with your needs.
						</p>
					</div>
				</div>
				<div className="bg-white h-full w-full relative rounded-t-2xl mt-10">
					<PricingCardContainer />

					<div className="accordion md:mx-52 pt-[1600px] md:pt-[600px] ">
						<div className="flex flex-col justify-center items-center text-black gap-4 mb-10">
							<div className="font-mono font-semibold text-xl">
								FREQUENTLY ASKED QUESTIONS
							</div>
							<div className="text-4xl">FAQ</div>
						</div>
						<Accordion />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
