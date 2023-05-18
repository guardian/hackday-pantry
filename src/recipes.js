import { recipes_schema } from './parser.js';
import raw_data from './recipes_table_export.json';

export const recipes = recipes_schema
	.parse(raw_data)
	.Items.filter(
		({ recipes_title, ingredients_lists }) =>
			recipes_title &&
			ingredients_lists.some(
				({ ingredients }) => ingredients.filter(({ item }) => item.trim()).length > 0,
			),
	);
