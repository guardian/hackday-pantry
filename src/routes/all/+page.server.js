import { recipes } from '../../recipes.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		recipes,
	};
}

export const csr = false;
