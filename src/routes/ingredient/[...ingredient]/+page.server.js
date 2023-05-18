import { normalise } from '../../../lib/normalise.js';
import { recipes } from '../../../recipes.js';

/** @type {import('./$types.js').PageServerLoad} */
export async function load({ params: { ingredient } }) {
	return {
		recipes: recipes.filter(({ ingredients_lists }) =>
			ingredients_lists.some((list) =>
				list.ingredients.some(({ item }) => normalise(item) === ingredient),
			),
		),
		ingredient,
	};
}

export const csr = false;
