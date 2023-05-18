<script>
	import Header from '../../../lib/Header.svelte';
	import Recipes from '../../../lib/Recipes.svelte';

	export let data;
</script>

<Header />

<h1>
	Recipes containing <strong>{data.ingredient}</strong>
</h1>

<Recipes list={data.recipes} ingredients={new Set([data.ingredient])} />

<style>
	h1 {
		font-family: 'GH Guardian Headline';
		font-weight: 400;
	}
	strong {
		color: #7d0068;
	}
</style>
