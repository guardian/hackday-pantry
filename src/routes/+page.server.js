import { recipes } from '../recipes.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const ingredients = recipes.reduce((accumulator, { ingredients_lists }) => {
		for (const ingredient of ingredients_lists
			.flatMap((list) => list.ingredients.map(({ item }) => item))
			.filter(Boolean)) {
			accumulator.set(ingredient, (accumulator.get(ingredient) ?? 0) + 1);
		}
		return accumulator;
	}, /** @type {Map<string, number>} */ (new Map()));

	return {
		recipes,
		ingredients,
	};
}
