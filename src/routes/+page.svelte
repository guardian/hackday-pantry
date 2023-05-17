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
	{#each [...data.ingredients.entries()].sort((a, b) => b[1] - a[1]) as [name, count]}
		<li><a class="ingredient" href={`/ingredient/${name}`}>{name} ({count})</a></li>
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

	.ingredient {
		color: #bb3b80;
	}

	li::after {
		content: '/';
		margin: 0 0.5rem;
		color: #707070;
	}
</style>
