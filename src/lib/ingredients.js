import { normalise } from './normalise';

/** @param {import("./parser").Recipe[]} list */
export const extract_ingredients = (list) =>
	list.reduce((accumulator, { ingredients_lists }) => {
		for (const ingredient of ingredients_lists
			.flatMap((list) => list.ingredients.map(({ item }) => normalise(item)))
			.filter(Boolean)) {
			accumulator.set(ingredient, (accumulator.get(ingredient) ?? 0) + 1);
		}
		return accumulator;
	}, /** @type {Map<string, number>} */ (new Map()));

/**
 * @param {import("./parser").Recipe} recipe
 * @param {Set<string>} pantry_ingredients
 */
export const completion = (recipe, pantry_ingredients) =>
	recipe.ingredients_lists.reduce(
		({ has, missing }, { ingredients }) => {
			for (const { item } of ingredients) {
				const ingredient = normalise(item);
				if (!ingredient) continue;
				if (pantry_ingredients.has(normalise(ingredient))) has.add(ingredient);
				else missing.add(ingredient);
			}
			return { has, missing, percentage: has.size / (has.size + missing.size) };
		},
		{
			has: /** @type {Set<string>} */ (new Set()),
			missing: /** @type {Set<string>} */ (new Set()),
			percentage: 0,
		},
	);
