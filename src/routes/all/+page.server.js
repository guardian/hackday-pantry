import { normalise } from '../../lib/normalise.js';
import { recipes } from '../../lib/recipes.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		recipes: recipes
			.map(({ path, recipeId, recipes_title, ingredients_lists }) => ({
				path,
				recipeId,
				recipes_title,
				ingredients: ingredients_lists.reduce((set, { ingredients }) => {
					for (const { item } of ingredients) {
						set.add(normalise(item));
					}
					return set;
				}, /** @type {Set<string>} */ (new Set())).size,
			}))
			.sort(({ ingredients: a }, { ingredients: b }) => a - b),
	};
}
