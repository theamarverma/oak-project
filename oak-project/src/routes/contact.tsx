import { createFileRoute } from '@tanstack/react-router';
import '../index.css';
export const Route = createFileRoute('/contact')({
	component: Contact,
});

import Header from '../components/Header/Header';
import Partners from '../components/Contact/Partners';
import Support from '../components/Contact/Support';
import { Calendar } from '../components/Contact/Calendar';
import ContactForm from '../components/Contact/ContactForm';
import QnA from '../components/Contact/QnA';
import Footer from '../components/Homepage/Footer';

export default function Contact() {
	return (
		<>
			<div className="bg-black">
				<Header />
				<div className="md:min-h-[800px] min-h-[500px] w-full flex justify-center items-center text-white">
					<div className="md:w-1/2 flex flex-col text-center p-2 md:mb-4">
						<strong className="md:text-7xl text-5xl p-4 md:p-8 pb-48">
							Contact
						</strong>
					</div>
				</div>
			</div>
			<div className="bg-white md:h-[550px] w-full  relative rounded-t-3xl mt-10">
				<div className="card-container md:mx-52 grid grid-cols-1 mx-12 md:grid-cols-3 gap-3 absolute inset-x-0 -top-72 ">
					<Calendar />
					<Support />
					<Partners />
				</div>
			</div>
			<div className="bg-white h-full mt-[1600px] md:mt-0 w-full">
				<div className="text-black md:flex-row flex-col gap-10 md:ml-48 flex">
					<div className="flex p-10 md:p-0 flex-col md:items-start  items-center justify-center text-center md:text-left">
						<h4 className="font-semibold font-mono tracking-wider text-[#03EFFE] uppercase">
							get in touch
						</h4>

						<div className="flex flex-col md:flex-row md:justify-start justify-center gap-4 mb-10">
							<h1 className=" left ml-14 mt-6 text-4xl">Send us a message</h1>
						</div>
						<p className="max-w-lg">
							Leave us a message through the form to the right and we'll get
							back to you as soon as possible.
						</p>
					</div>
					<div className="md:min-w-[1000px] pl-8 md:pl-0">
						<ContactForm />
					</div>
				</div>
				<div className="flex flex-col gap-4 justify-center items-center mt-64">
					<strong className="">FREQUENTLY ASKED QUESTIONS</strong>
					<h1 className="md:text-5xl text-3xl">Have any questions?</h1>
					<div className="max-w-3xl  my-8 mx-10 md:mx-0">
						<QnA />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
