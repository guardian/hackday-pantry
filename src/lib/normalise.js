const DASHES_AND_COMMAS = /-|–|\/|,/g;
const MULTIPLE_SPACES = /\s{2,}/g;
const CREME = /\bcrème\b/;

const ADJECTIVES =
	/\b(organic|fresh|good quality|free range|old fashioned|finely|shredded|chopped|sliced|whole|small|medium|large|sized?|soft|softened|iced|cold|warm)\b/g;

/** @param {string} ingredient */
export const normalise = (ingredient) => {
	const normalised = ingredient
		.toLowerCase()
		.replaceAll(DASHES_AND_COMMAS, ' ')
		.replaceAll(ADJECTIVES, '')
		.replace(CREME, 'creme')
		.replaceAll(MULTIPLE_SPACES, ' ')
		.trim();

	switch (normalised) {
		// onions
		case 'onion':
		case 'onions':
		case 'small onion':
		case 'small onions':
		case 'medium onion':
		case 'medium onions':
		case 'red onion':
		case 'large white onion':
		case '-to- onions':
			return 'onion';

		// eggs
		case 'egg':
		case 'eggs':
		case 'small egg':
		case 'small eggs':
		case 'medium egg':
		case 'medium eggs':
		case 'medium free-range eggs':
		case 'large free-range eggs':
		case 'large egg':
		case 'large eggs':
		case 'whole egg':
		case 'whole eggs':
		case 'free-range egg':
		case 'free-range eggs':
		case 'free range eggs':
		case 'organic free-range eggs':
			return 'egg';

		case 'egg yolk':
		case 'egg yolks':
		case 'large egg yolks':
		case 'medium egg yolks':
		case 'free-range egg yolk':
		case 'free-range egg yolks':
		case 'free-range organic egg yolk':
		case 'free-range organic egg yolks':
		case 'free rangemedium egg yolks':
			return 'egg yolk';

		case 'egg white':
		case 'egg whites':
		case 'large egg whites':
		case 'medium egg whites':
		case 'free-range egg white':
		case 'free-range egg whites':
		case 'free-range organic egg white':
		case 'free-range organic egg whites':
		case 'organic/free-range medium egg whites':
			return 'egg white';

		// peppers and chillies
		case 'freshly ground black pepper':
		case 'ground black pepper':
			return 'black pepper';

		case 'red peppers':
			return 'red pepper';

		case 'red chillies':
		case 'fresh red chillies':
			return 'red chilli';

		case 'green chillies':
			return 'green chilli';

		case 'dried chilli flakes':
		case 'red chilli flakes':
		case 'urfa chilli flakes':
			return 'chilli flakes';

		case 'red chilli powder':
		case 'kashmiri chilli powder ':
			return 'chilli powder';

		// sugar
		case 'soft light brown sugar':
		case 'soft brown sugar':
			return 'brown sugar';

		case 'golden caster sugar':
		case 'unrefined caster sugar':
			return 'caster sugar';

		case 'light muscovado':
			return 'return muscovado sugar';

		case 'dark brown muscovado sugar':
			return 'dark muscovado sugar';

		// tomatoes
		case 'tomatoes':
			return 'tomtato';

		case 'tomato purée':
			return 'tomato puree';

		case 'passata':
		case 'tomato passata sauce':
			return 'tomato passata';

		case 'lemons':
		case 'unwaxed lemon':
		case 'lemon wedges':
			return 'lemon';

		case 'lemon grass':
			return 'lemongrass';

		case 'olive oil':
		case 'extra-virgin olive oil':
		case 'extra virgin olive oil':
			return 'olive oil';

		case 'vegetable oil':
		case 'veg oil':
			return 'vegetable oil';

		case 'creme fraiche ':
		case 'creme fraîche':
			return 'creme fraiche';

		// flour
		// herbs
		// salt
		// oil

		// butter
		case 'melted butter':
		case 'good butter':
		case 'very butter':
			return 'butter';
		case 'leftover brandy butter':
		case 'courvoisier brandy butter':
		case 'waitrose brandy butter':
		case 'tesco brandy butter':
			return 'brandy butter';
		// cheese (parmesan, cheddar)

		// spices (paprika, )
		case 'sweet smoked paprika':
			return 'smoked sweet paprika';
		case 'hot paprika':
			return 'paprika';
		// garlic
		case 'finely garlic':
		case 'deep fried garlic':
			return 'garlic';
		// stock
		case 'very reduced chicken stock':
			return 'chicken stock';
		case 'hot vegetable stock':
			return 'vegetable stock';
		// vinegar
		// wine
		case 'dry white  wine':
		case 'glass white wine':
			return 'white wine';

		case 'glass red wine':
		case 'good quality red wine':
		case 'full bodied red wine':
		case 'robust red wine':
			return 'red wine';

		// water
		case 'water':
		case 'ice water':
		case 'iced water':
		case 'ice-cold water':
		case 'cold water':
		case 'lukewarm water':
		case 'warm water':
		case 'hot water':
		case 'boiling water':
			return 'water';

		default:
			return normalised;
	}
};
