<script>
	/** @type {import('../parser.js').Recipe["ingredients_lists"][number]["ingredients"][number]}*/
	export let ingredient;
</script>

<span class="quantity">{ingredient.quantity.absolute}</span>
<span class="unit">{ingredient.unit}</span>
<span class="item">{ingredient.item}</span>

<style>
	span {
		text-decoration: underline;
		text-decoration-line: underline;
		text-decoration-thickness: 2px;
	}
	.quantity {
		text-decoration-color: aquamarine;
	}
	.unit {
		text-decoration-color: orangered;
	}
	.item {
		text-decoration-color: antiquewhite;
	}
</style>
