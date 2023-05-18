<script>
	import Header from '../../lib/Header.svelte';
	import Recipes from '../../lib/Recipes.svelte';
	import { extract_ingredients } from '../../lib/ingredients';
	import { normalise } from '../../lib/normalise';

	export let data;

	let search = '';
	let selection = /** @type {Set<string>} */ (new Set());

	$: list = data.recipes.filter(({ ingredients_lists }) =>
		ingredients_lists
			.flatMap(({ ingredients: listed }) => listed)
			.every(({ item }) => !selection.has(normalise(item))),
	);

	$: ingredients = extract_ingredients(list);

	$: matching_ingredients_list = [...ingredients]
		.filter(([name]) => !selection.has(name) && name.includes(normalise(search)))
		.sort(([, a], [, b]) => b - a);

	/** @param {string} ingredient */
	const add_ingredient = (ingredient) => {
		selection.add(ingredient);
		selection = selection;
		search = '';
	};

	/** @type {import('./$types').Snapshot<{search: string, selection: string[]}>} */
	export const snapshot = {
		capture: () => ({ search, selection: [...selection] }),
		restore: ({ search: search_snapshot, selection: selection_snapshot }) => {
			selection = new Set(selection_snapshot);
			search = search_snapshot;
		},
	};
</script>

<Header />

<label>
	<h3>What ingredients do you want to avoid?</h3>
	<input
		type="search"
		placeholder="type to search…"
		bind:value={search}
		on:keydown={(event) => {
			if (event.key === 'Enter') {
				event.preventDefault();
				const [first_matching_ingredient] = matching_ingredients_list;
				if (first_matching_ingredient) add_ingredient(first_matching_ingredient[0]);
			}
		}}
	/>
</label>

<ul>
	{#each [...selection] as ingredient}
		<button
			class="ingredient selected"
			on:click={() => {
				selection.delete(ingredient);
				selection = selection;
				search = '';
			}}
		>
			{ingredient} -
		</button>
	{/each}
	{#if list.length > 5}
		{#each matching_ingredients_list.slice(0, 12) as [name], index}
			<li>
				<button
					class="ingredient"
					class:first={index === 0}
					on:click={() => {
						add_ingredient(name);
					}}>{name} +</button
				>
			</li>
		{/each}
		{#if matching_ingredients_list.length > 12}
			<li>and {matching_ingredients_list.length - 12} more…</li>
		{/if}
	{/if}
</ul>

{#if selection.size > 0}
	<Recipes {list} ingredients={selection} />
{/if}

<style>
	label {
		text-align: center;
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}
	input[type='search'] {
		font-size: 2rem;
		text-align: center;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	.ingredient {
		font-size: 1.5rem;
		background-color: rgb(254, 238, 247);
		color: #bb3b80;
		border: currentColor solid 2px;
		border-radius: 2rem;
		padding: 0.25em 0.5em;
		box-sizing: border-box;
		height: 3.6rem;
	}

	.ingredient.first {
		outline: 2px solid salmon;
	}

	.ingredient.selected {
		background-color: #bb3b80;
		border-color: #7d0068;
		color: rgb(254, 238, 247);
	}
</style>
