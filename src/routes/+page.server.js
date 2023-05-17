import { recipes } from '../recipes.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const ingredients = recipes.reduce((set, next) => {
		for (const ingredient of next.ingredients_lists.flatMap((list) =>
			list.ingredients.map(({ item }) => item),
		)) {
			if (ingredient) set.add(ingredient);
		}
		return set;
	}, /** @type {Set<string>} */ (new Set()));

	return {
		recipes,
		ingredients,
	};
}
