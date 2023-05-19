import { normalise } from './normalise.js';
import { recipes_schema } from './parser.js';
import raw_data from '../recipes_table_export.json';

export const recipes = recipes_schema
	.parse(raw_data)
	.Items.filter(
		({ recipes_title, ingredients_lists }) =>
			recipes_title &&
			ingredients_lists.some(
				({ ingredients }) => ingredients.filter(({ item }) => item.trim()).length > 0,
			),
	);

/**
 * @param {typeof recipes} recipes
 * @param {...string} ingredients_in_the_pantry
 */
export const filtered = (recipes, ...ingredients_in_the_pantry) => {
	const normalised_ingredients_pantry = ingredients_in_the_pantry.map(normalise);
	return recipes.filter(({ ingredients_lists }) =>
		ingredients_lists.some(({ ingredients }) =>
			normalised_ingredients_pantry.every((in_pantry) =>
				ingredients.some(({ item }) => normalise(item) === in_pantry),
			),
		),
	);
};
