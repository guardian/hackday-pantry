import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ edge: true }),
	},
};

export default config;
