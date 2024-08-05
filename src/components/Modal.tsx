import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Play } from 'lucide-react';

const Modal = () => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<div className="flex flex-col justify-center items-center  gap-5">
				<h1 className="text-4xl font-semibold">How does OAK work ?</h1>

				<h3 className="text-xl font-mono text-gradient">
					1MIN VIDEO EXPLANATION
				</h3>
				<div className="card flex justify-content-center">
					<div className="relative h-full  w-full">
						<img
							className="object-cover rounded-xl opacity-55 h-full w-full"
							src="https://cdn.prod.website-files.com/64ff275e33673d684f459532/650a65507ae9354bd2a0887a_OAK%20Thumbnail.jpeg"
							alt="video-modal"
						/>
						<div className=" z-40 inset-0  absolute items-center justify-center flex">
							<Button
								className=" h-32  bg-custom-gradient w-40 p-2 transform transition-transform duration-300 hover:scale-105 rounded-3xl flex justify-center items-center"
								onClick={() => setVisible(true)}
							>
								<Play
									visibility="100"
									size={80}
									absoluteStrokeWidth={false}
									color="white"
								/>
							</Button>
						</div>
					</div>

					<Dialog
						header=""
						visible={visible}
						style={{
							width: '100%',
							height: '100%',
							// opacity: '.8',
							// backgroundColor: 'background: rgba(0,0,0,0.2)', // Set to transparent
							backdropFilter: 'blur(10px)',
							boxShadow: 'none', // Remove any box shadow
							border: 'none', // Remove any border
							zIndex: '10000', // Set a high z-index
						}}
						draggable={false}
						onHide={() => setVisible(false)}
						className="transparent-dialog w-full h-full" // Custom class for additional styling if needed
					>
						<div className="md:flex justify-center flex-col items-center  h-full w-full">
							<iframe
								className="transform transition duration-300 md:min-h-[528px] md:min-w-[1000px]"
								allowFullScreen={true}
								src="https://www.youtube.com/embed/B1BLtx7Z_NA?rel=0&amp;&mute=1"
							/>
						</div>
					</Dialog>
				</div>
			</div>
		</>
	);
};

export default Modal;
