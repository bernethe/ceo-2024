/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/src/assets/bg-hero.webp')",
				'services': "url('/src/assets/bg-services.webp')",
				'circle': "url('/src/assets/circle-fade-to-gray.svg')"
			},
			fontFamily: {
				'body': ['Montserrat Variable', 'sans-serif'],
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#fff',
				black: '#000',
				bodybg: '#F1F2F2',
				weirdblue: '#1c306f',
				gray: {
					DEFAULT: '#7f7f7f',
					50: '#f6f6f6',
					100: '#E6E7E8',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#7f7f7f',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#3d3d3d',
					950: '#262626',
				},
				blue: {
					DEFAULT: '#003e52',
					50: '#e9fffe',
					100: '#c9fffd',
					200: '#99fffe',
					300: '#6BDAD5',
					400: '#07f1ff',
					500: '#00d2ef',
					600: '#00a7c9',
					700: '#0084a1',
					800: '#086a82',
					900: '#0c576d',
					950: '#003e52',
				}
				
			}
		}
	},
	plugins: [],
}
