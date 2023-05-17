<script>
	import Header from '../lib/Header.svelte';
	import Recipes from '../lib/Recipes.svelte';
	import { extract_ingredients } from '../lib/ingredients';

	export let data;

	let search = '';

	$: selection = /** @type {Set<string>} */ (new Set());

	$: list = data.recipes.filter(({ ingredients_lists }) =>
		ingredients_lists.some(({ ingredients: listed }) =>
			[...selection].every((term) => listed.some(({ item }) => item.includes(term))),
		),
	);

	$: ingredients = extract_ingredients(list);

	$: ingredients_list = [...ingredients]
		.filter(([name]) => !selection.has(name) && name.includes(search))
		.sort((a, b) => b[1] - a[1]);
</script>

<Header />

<p>
	Found {ingredients.size} individual ingredients
</p>

<input
	type="search"
	bind:value={search}
	on:keydown={(event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const [ingredient] = ingredients_list[0] ?? [];
			if (ingredient) {
				selection.add(ingredient);
				selection = selection;
				search = '';
			}
		}
	}}
/>

{#if selection.size > 0}
	{#each [...selection] as ingredient}
		<button
			on:click={() => {
				selection.delete(ingredient);
				selection = selection;
			}}
		>
			{ingredient} &cross;
		</button>
	{/each}
{/if}

{#if list.length > 3}
	<ul>
		{#each ingredients_list as [name, count]}
			<li>
				<button
					on:click={() => {
						selection.add(name);
						selection = selection;
					}}
					class="ingredient">{name} ({count})</button
				>
			</li>
		{/each}
	</ul>
{/if}

{#if selection.size > 0}
	<Recipes {list} />
{/if}

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
