import { normalise } from '../../../lib/normalise.js';
import { recipes } from '../../../lib/recipes.js';

/** @type {import('./$types.js').PageServerLoad} */
export async function load({ params }) {
	const ingredient = params.ingredient.replaceAll('_', ' ');
	return {
		recipes: recipes.filter(({ ingredients_lists }) =>
			ingredients_lists.some((list) =>
				list.ingredients.some(({ item }) => normalise(item) === ingredient),
			),
		),
		ingredient,
	};
}
