import { json } from '@sveltejs/kit';
import { filtered, recipes } from '../../lib/recipes';

export const GET = async ({ url }) => {
	const query = url.searchParams.get('q')?.split(',');

	if (!query) return json({ message: 'Try adding a query parameter ?q=leek' });

	return json(filtered(recipes, ...query));
};
