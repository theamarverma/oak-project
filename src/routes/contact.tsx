import { createFileRoute } from '@tanstack/react-router';
import '../index.css';
export const Route = createFileRoute('/contact')({
	component: Contact,
});

import Header from '../components/Header/Header';
import Partners from '../components/Contact/Partners';
import Support from '../components/Contact/Support';

export default function Contact() {
	return (
		<>
			<div className="bg-white ">
				<Header />
				<div className="bg-black  h-full w-full flex justify-center items-center text-white">
					<div className="md:w-1/2  mt-24 flex flex-col text-center gap-4 p-2 md:mb-4">
						<strong className="md:text-7xl text-5xl p-4 md:p-8 ">
							Contact
						</strong>
					</div>
				</div>
				<div className="flex gap-3">
					<Support />
					<Partners />
				</div>
			</div>
		</>
	);
}
