import { error } from '@sveltejs/kit';
import { recipes } from '../../recipes.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const post = recipes.find((recipe) => recipe.path === '/' + params.path);

	if (post) {
		return post;
	}

	throw error(404, 'Not found');
}
