/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			textColor: {
				'gradient-text':
					'linear-gradient(81deg, rgb(2, 240, 254), rgb(78, 172, 254))',
				'gradient-text2':
					'linear-gradient(81deg, rgb(36, 190, 199), rgb(38, 131, 212))',
			},
			backgroundImage: {
				'custom-gradient':
					'linear-gradient(187deg, rgb(2, 240, 254), rgba(78, 172, 254, 0.71))',
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities(
				{
					'.text-gradient': {
						background:
							'linear-gradient(81deg, rgb(2, 240, 254), rgb(78, 172, 254))',
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						backgroundClip: 'text',
						color: 'transparent',
					},
				},
				['responsive', 'hover']
			);
		},
		function ({ addUtilities }) {
			addUtilities(
				{
					'.text-gradient2': {
						background:
							'linear-gradient(81deg, rgb(36, 190, 199), rgb(38, 131, 212))',
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						backgroundClip: 'text',
						color: 'transparent',
					},
				},
				['responsive', 'hover']
			);
		},
	],
};
