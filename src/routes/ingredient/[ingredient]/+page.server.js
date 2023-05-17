import { recipes } from '../../../recipes.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { ingredient } }) {
	return {
		recipes: recipes.filter(({ ingredients_lists }) =>
			ingredients_lists.some((list) => list.ingredients.some(({ item }) => item === ingredient)),
		),
		ingredient,
	};
}
