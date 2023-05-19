const DASHES_AND_COMMAS = /-|–|\/|,|!|\(|\)/g;
const MULTIPLE_SPACES = /\s{2,}/g;
const E_ACCENTS = /è|é|ë/g;
const I_ACCENTS = /î|ï/g;
const DIGITS = /\b\d+\b/g;

const ADJECTIVES =
	/\b(organic|fresh(ly)?|good|quality|free range|very|extra|old( fashioned)?|fine(ly)?|shredded|chopped|grated|sliced|diced|whole|small|medium|large|sized?|soft(ened)?|iced|cold|warm)\b/g;

/** @param {string} ingredient */
export const normalise = (ingredient) => {
	const normalised = ingredient
		.toLowerCase()
		.replaceAll(DASHES_AND_COMMAS, ' ')
		.replaceAll(DIGITS, '')
		.replaceAll(ADJECTIVES, '')
		.replace(E_ACCENTS, 'e')
		.replace(I_ACCENTS, 'i')
		.replaceAll(MULTIPLE_SPACES, ' ')
		.trim();

	switch (normalised) {
		// onions
		case 'onion':
		case 'onions':
		case 'crisp onions':
		case 'small onion':
		case 'small onions':
		case 'medium onion':
		case 'medium onions':
		case 'brown onion':
		case 'brown onions':
		case 'yellow onion':
		case 'yellow onions':
		case 'to onions':
		case 'or onions':
		case 'english onions':
			return 'onion';

		case 'red onion':
		case 'red onions':
			return 'red onion';

		case 'white onion':
		case 'white onions':
			return 'white onion';

		case 'spring onion':
		case 'spring onions':
			return 'spring onion';

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
		case 'free range egg white':
		case 'free range egg whites':
		case 'free rang egg whites':
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
		case 'brown sugar':
		case 'light brown sugar':
		case 'dark brown sugar':
			return 'brown sugar';

		case 'golden caster sugar':
		case 'unrefined caster sugar':
			return 'caster sugar';

		case 'muscovado sugar':
		case 'light muscovado':
		case 'light muscovado sugar':
		case 'dark muscovado sugar':
		case 'dark brown muscovado sugar':
			return 'muscovado sugar';

		case 'cinnamon':
		case 'ground cinnamon':
		case 'ground cassia cinnamon':
			return 'cinnamon';

		case 'cinnamon stick':
		case 'cinnamon sticks':
		case 'stick cinnamon':
			return 'cinnamon stick';

		// tomatoes
		case 'tomato':
		case 'tomatoes':
			return 'tomato';

		case 'tomato passata':
		case 'passata':
		case 'tomato passata sauce':
			return 'tomato passata';

		case 'lemon':
		case 'lemons':
		case 'unwaxed lemon':
		case 'lemon wedges':
			return 'lemon';

		case 'lemongrass':
		case 'lemon grass':
			return 'lemongrass';

		case 'olive oil':
		case 'virgin olive oil':
			return 'olive oil';

		case 'vegetable oil':
		case 'veg oil':
			return 'vegetable oil';

		// herbs
		case 'herbs':
		case 'mixed dried herbs':
		case 'dried mixed herbs':
		case 'mixed herbs':
			return 'herbs';
		// salt
		case 'sea salt':
		case 'fine sea salt':
		case 'flaky sea salt':
			return 'sea salt';

		case 'table salt':
		case 'fine salt':
			return 'salt';
		// oil

		// butter
		case 'butter':
		case 'melted butter':
		case 'very butter':
			return 'butter';

		case 'leftover brandy butter':
		case 'courvoisier brandy butter':
		case 'waitrose brandy butter':
		case 'tesco brandy butter':
			return 'brandy butter';

		// cheese (parmesan, cheddar)
		case 'parmesan':
		case 'freshly grated parmesan':
		case 'freshly grated parmesan cheese':
		case 'parmesan cheese':
			return 'parmesan';

		case 'freshly grated nutmeg':
			return 'nutmeg';

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
		case 'red wine':
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

		case 'apple':
		case 'apples':
			return 'apple';

		case 'puff pastry':
		case 'all butter puff pastry':
			return 'puff pastry';

		case 'tofu':
		case 'firm tofu':
		case 'firm silken tofu':
			return 'tofu';

		case 'leek':
		case 'leeks':
		case 'young leeks':
			return 'leek';

		case 'potato':
		case 'potatoes':
		case 'mixed potatoes':
		case 'cooked potatoes':
		case 'leftover roast potatoes':
		case 'maris piper potatoes':
			return 'potato';

		default:
			return normalised;
	}
};
