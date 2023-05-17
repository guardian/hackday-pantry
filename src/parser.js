import { z } from 'zod';

const ingredient = z.object({
	item: z.string(),
	unit: z.string(),
	// comment: z.string(),
	// text: z.string(),
	quantity: z.object({
		absolute: z.preprocess((value) => {
			const maybe_number = Number(value);
			return Number.isNaN(maybe_number) ? value : maybe_number;
		}, z.number().or(z.string())),
		from: z.string(),
		to: z.string(),
	}),
});

const ingredients_list = z.object({
	title: z.string(),
	ingredients: z.array(ingredient),
});

/** @typedef {z.infer<typeof recipe>} Recipe */
const recipe = z.object({
	path: z.string(),
	serves: z.string(),
	steps: z.array(z.string()),
	recipes_title: z.string(),
	ingredients_lists: z.preprocess(
		(value) => (value === null ? [] : value),
		z.array(ingredients_list),
	),
});

export const recipes_schema = z.object({
	Items: z.array(recipe),
});
