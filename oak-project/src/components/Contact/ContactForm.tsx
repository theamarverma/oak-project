import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
	name: string;
	email: string;
	companyName: string;
	message: string;
}

const ContactForm: React.FC = () => {
	// Initialize the form with react-hook-form
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormValues>({
		defaultValues: {
			name: '',
			email: '',
			companyName: '',
			message: '',
		},
	});

	// Handler for form submission
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		// Handle form submission
		console.log('Form Submitted:', data);
	};

	return (
		<form
			id="wf-form-Email-Form-Contact-Page"
			name="wf-form-Email-Form-Contact-Page"
			aria-label="Email Form Contact Page"
			className="bg-neutral-200 rounded-l-3xl flex md:p-32 flex-col items-start py-20 pl-20 relative"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div>
				<div className="flex flex-col md:flex-row w-full ">
					<div className="hs-form-field w-full md:w-1/2  pr-4">
						<label
							htmlFor="Name-Contact-Page"
							className="block mb-2"
						>
							Name<span className="text-medium">*</span>
						</label>
						<input
							className="w-full text-secondary-color-1 border-0 rounded-lg h-16 mb-4 p-6 text-lg transition-all focus:border-gray-300 focus:outline-none"
							id="Name-Contact-Page"
							placeholder="First Name"
							{...register('name', { required: true, minLength: 2 })}
						/>
					</div>
					<div className="hs-form-field w-full md:w-1/2 md:pl-4">
						<label
							htmlFor="email-input"
							className="block mb-2"
						>
							Email Address<span className="text-medium">*</span>
						</label>
						<input
							className="w-full text-secondary-color-1 border-0 rounded-lg h-16 mb-4 p-6 text-lg transition-all focus:border-gray-300 focus:outline-none"
							id="email-input"
							placeholder="Email"
							{...register('email', {
								required: true,
								pattern: /^\S+@\S+\.\S+$/,
							})}
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="hs-form-field mb-6">
						<label
							htmlFor="Company-Name-Contact-Page"
							className="block mb-2"
						>
							Company Name<span className="text-medium">*</span>
						</label>
						<input
							className="w-full text-secondary-color-1 border-0 rounded-lg h-16 mb-4 p-6 text-lg transition-all focus:border-gray-300 focus:outline-none"
							id="Company-Name-Contact-Page"
							placeholder="The OAK Network Ltd"
							{...register('companyName')}
						/>
					</div>
					<div className="hs-form-field">
						<label
							htmlFor="message-input"
							className="block mb-2"
						>
							Message<span className="text-medium">*</span>
						</label>
						<textarea
							className="w-full text-secondary-color-1 border-0 rounded-lg h-32 p-6 text-lg transition-all focus:border-gray-300 focus:outline-none"
							id="message-input"
							placeholder="Example Text"
							{...register('message', { required: true })}
						/>
					</div>
				</div>
				<div className="mt-6">
					<button
						type="submit"
						className="hs-button w-button bg-blue-500 text-white rounded-lg px-8 py-3 hover:bg-blue-600 transition-all"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Sending...' : 'Send message'}
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
