<script>
	import Header from '../lib/Header.svelte';
	import Recipes from '../lib/Recipes.svelte';

	export let data;
</script>

<Header />

<p>
	Found {data.ingredients.size} individual ingredients
</p>

<ul>
	{#each [...data.ingredients].sort((a, b) => a.localeCompare(b)) as ingredient}
		<li><a href={`/ingredient/${ingredient}`}>{ingredient}</a></li>
	{/each}
</ul>

<Recipes list={data.recipes} />

<style>
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		row-gap: 1rem;
	}

	li::before {
		content: '/';
		margin: 0 0.5rem;
		color: #ccc;
	}
</style>
