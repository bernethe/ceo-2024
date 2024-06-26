/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'circle': "url('/src/assets/circle-grad.svg')"
			},
			fontFamily: {
				'body': ['Montserrat Variable', 'sans-serif'],
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#fff',
				black: '#000',
				weirdblue: '#1c306f',
				gray: {
					DEFAULT: '#7f7f7f',
					50: '#f6f6f6',
					100: '#e7e7e7',
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
				'sky': {
					DEFAULT: '#d9e6f5',
					50: '#f2f6fc',
					100: '#d9e6f5',
					200: '#cbddf2',
					300: '#a7c8e9',
					400: '#7eabdc',
					500: '#5f8fd2',
					600: '#4b75c5',
					700: '#4163b4',
					800: '#3a5293',
					900: '#334675',
					950: '#232c48',
				},
				'blue': {
					DEFAULT: '#05092f',
					50: '#e8f3ff',
					100: '#d5e8ff',
					200: '#b3d2ff',
					300: '#86b3ff',
					400: '#5684ff',
					500: '#3056ff',
					600: '#0d24ff',
					700: '#0418fe',
					800: '#071acc',
					900: '#10229f',
					950: '#05092f',
				},
				'magenta': {
					DEFAULT: '#e33255',
					50: '#fff1f2',
					100: '#ffe4e5',
					200: '#fecdd2',
					300: '#fca5ae',
					400: '#fa7283',
					500: '#f3405b',
					600: '#e33255',
					700: '#bd1339',
					800: '#9e1336',
					900: '#871435',
					950: '#4b0618',
				},
				
			}
		}
	},
	plugins: [],
}
