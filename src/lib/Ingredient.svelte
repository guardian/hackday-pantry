<script>
	/** @type {import('../parser.js').Recipe["ingredients_lists"][number]["ingredients"][number]}*/
	export let ingredient;

	/**
	 * @param {string} unit
	 * @see https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier */
	const parse_unit = (unit) => {
		switch (unit) {
			case 'C':
				return 'celsius';

			case 'cm':
				return 'centimeter';

			case 'g':
			case 'g.':
			case 'gram':
				return 'gram';

			case 'h':
			case 'hour':
				return 'hour';

			case 'kg':
			case 'kilogram':
				return 'kilogram';

			case 'l':
			case 'L':
			case 'liter':
				return 'liter';

			case 'ml':
			case 'milliliter':
				return 'milliliter';

			case 'mm':
				return 'millimeter';

			case 'min':
			case 'min.':
				return 'minute';

			case '%':
			case 'percent':
				return 'percent';

			case 's':
			case 'sec':
			case 'sec.':
				return 'second';

			default:
				return undefined;
		}
	};

	const unit = parse_unit(ingredient.unit);

	/** @type {Intl.NumberFormatOptions} */
	const options = unit ? { style: 'unit', unit: 'gram', unitDisplay: 'narrow' } : {};

	const formatter = new Intl.NumberFormat('en-gb', options);

	/** @param {string | number} quantity */
	const formatted = (quantity) =>
		typeof quantity === 'string' ? quantity : formatter.format(quantity);
</script>

<span class="quantity">{formatted(ingredient.quantity.absolute)}</span>
{typeof unit === 'undefined' ? ingredient.unit : ''}
<a href={`/ingredient/${ingredient.item}`}>{ingredient.item}</a>

<style>
	.quantity {
		color: rgb(125, 0, 104);
	}

	a {
		color: #bb3b80;
		text-decoration-color: #eee;
		text-underline-offset: 2px;
	}
</style>
