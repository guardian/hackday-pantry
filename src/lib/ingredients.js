import { normalise } from './normalise';

/** @param {import("../parser").Recipe[]} list */
export const extract_ingredients = (list) =>
	list.reduce((accumulator, { ingredients_lists }) => {
		for (const ingredient of ingredients_lists
			.flatMap((list) => list.ingredients.map(({ item }) => normalise(item)))
			.filter(Boolean)) {
			accumulator.set(ingredient, (accumulator.get(ingredient) ?? 0) + 1);
		}
		return accumulator;
	}, /** @type {Map<string, number>} */ (new Map()));
