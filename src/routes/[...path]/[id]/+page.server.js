import { error } from '@sveltejs/kit';
import { recipes } from '../../../recipes.js';

/** @type {import('./$types.js').PageServerLoad} */
export async function load({ params }) {
	const recipe = recipes.find(
		({ path, recipeId }) => path.slice(1) === params.path && recipeId === Number(params.id),
	);

	if (recipe) {
		return recipe;
	}

	throw error(404, 'Not found');
}
