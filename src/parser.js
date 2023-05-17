import { z } from 'zod';

const ingredient = z.object({
	item: z.string(),
	unit: z.string(),
	// comment: z.string(),
	// text: z.string(),
	quantity: z.object({
		absolute: z.number().nonnegative().finite().or(z.string()),
		// z.preprocess((value) => {
		// 	switch (z.string().parse(value).toLowerCase()) {
		// 		case '':
		// 		case 'a few':
		// 			return 0;
		// 		default:
		// 			return Number(value);
		// 	}
		// }, ),
		from: z.string(),
		to: z.string()
	})
});

const ingredients_list = z.object({
	title: z.string(),
	ingredients: z.array(ingredient)
});

/** @typedef {z.infer<typeof recipe>} Recipe */
const recipe = z.object({
	path: z.string(),
	serves: z.string(),
	steps: z.array(z.string()),
	recipes_title: z.string(),
	ingredients_lists: z.preprocess(
		(value) => (value === null ? [] : value),
		z.array(ingredients_list)
	)
});

export const recipes_schema = z.object({
	Items: z.array(recipe)
});
