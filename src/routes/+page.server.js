import { recipes } from '../recipes.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		recipes: recipes.map(({ path, recipes_title }) => ({ path, recipes_title }))
	};
}
