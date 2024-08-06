import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
		<>
			<footer className="bg-[#151418] w-full px-4 py-4 text-white md:px-48">
				<div className="p-4 flex flex-col items-center md:items-start">
					<img
						src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/64ff5f8243d7107029f71cea_OAK%20Logo%20vector.svg"
						alt="OAK Logo"
						className="h-24 w-60 text-white invert"
					/>
					<div className="text-xl text-[#919497] p-4 text-center md:text-left">
						<div>The OAK Network UK Ltd</div>
						<div>Unit 562 Salisbury House, 31 London Wall</div>
						<div>EC2M 5QQ</div>
					</div>
				</div>
				<div className="border-b-2 border-b-[#656769] mb-6"></div>
				<div className="grid grid-cols-2 md:grid-cols-5 gap-6 ml-4 p-4">
					<div className="flex flex-col gap-6 sitemap">
						<strong className="text-2xl">Sitemap</strong>
						<div className="border-b w-1/2 border-b-gray-500"></div>
						<ul className="flex flex-col gap-2  text-[#919497]">
							<a href="">Home</a>
							<a href="">Contact</a>
							<a href="">Services</a>
							<a href="">Blog</a>
						</ul>
					</div>
					<div className="flex flex-col gap-6 legal">
						<strong className="text-2xl">Legal</strong>
						<div className="border-b w-1/2 border-b-gray-500"></div>
						<ul className="flex flex-col gap-2  text-[#919497]">
							<a href="">Privacy policy</a>
							<a href="">Use of cookies</a>
							<a href="">Terms of use</a>
							<a href="">Modern Slavery Policy</a>
						</ul>
					</div>
					<div className="flex flex-col gap-6 clients">
						<strong className="text-2xl">OAK Clients</strong>
						<div className="border-b w-1/2 border-b-gray-500"></div>
						<ul className="flex flex-col gap-2  text-[#919497]">
							<a href="">OAK Insights login</a>
							<a href="">Leave a review</a>
						</ul>
					</div>
					<div className="flex flex-col gap-6 contact col-span-1 md:col-span-2">
						<strong className="text-2xl">Contact us</strong>
						<div className="border-b border-b-gray-500"></div>
						<div className="email mb-4">
							<div>Email</div>
							<a
								className="text-[#919497]"
								href="mailto:hello@oak-network.com"
							>
								hello@oak-network.com
							</a>
						</div>
						<div className="border-b border-b-gray-500"></div>
						<div className="phone">
							<div>Phone</div>
							<a
								className="text-[#919497]"
								href="tel:02033028909"
							>
								02033028909
							</a>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<div className="border-b-2 border-b-[#656769] mb-6"></div>
					<div className="flex-col md:flex-row flex gap-8 justify-center items-center md:justify-around ">
						<div>
							<img
								className="md:w-1/3 w-1-2"
								src="https://tree-nation.com/images/tracking/label-co2-website-black-en.png"
								alt=""
							/>
						</div>
						<div className="">
							Copyright © 2024 OAK Network Ltd. All Rights Reserved
						</div>
						<div className="mt-6">
							<ul className="flex items-center justify-center gap-4">
								<li>
									<a
										href="https://twitter.com/TheOAKNetwork"
										target="_blank"
										rel="noopener noreferrer"
									>
										<XIcon className="w-6 h-6 text-[#919497] hover:text-[#03EFFE]" />
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/theoaknetwork/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<InstagramIcon className="w-6 h-6 text-[#919497] hover:text-[#03EFFE]" />
									</a>
								</li>
								<li>
									<a
										href="https://www.facebook.com/TheOakNetwork"
										target="_blank"
										rel="noopener noreferrer"
									>
										<FacebookIcon className="w-6 h-6 text-[#919497] hover:text-[#03EFFE]" />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/company/the-oak-network/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<LinkedInIcon className="w-6 h-6 text-[#919497] hover:text-[#03EFFE]" />
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/@theoaknetwork4096"
										target="_blank"
										rel="noopener noreferrer"
									>
										<YouTubeIcon className="w-6 h-6 text-[#919497] hover:text-[#03EFFE]" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
