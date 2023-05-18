<script>
	import { completion, extract_ingredients } from './ingredients';
	import { normalise } from './normalise';

	/** @type {import("../parser").Recipe[]} */
	export let list;

	/** @type {Set<string>} */
	export let ingredients = new Set();
</script>

<ul>
	{#each list
		.map((recipe) => {
			return { ...recipe, completed: completion(recipe, ingredients) };
		})
		.sort((a, b) => b.completed.percentage - a.completed.percentage) as recipe}
		{@const flat_ingredients = recipe.ingredients_lists
			.flatMap((list) => list.ingredients)
			.filter(({ item }) => item)}
		<li>
			<a href={`${recipe.path}/${recipe.recipeId}`}>{recipe.recipes_title} </a>
			<br />
			{#each flat_ingredients as { item: ingredient }, index}
				<span class:got={recipe.completed.has.has(normalise(ingredient))}>{ingredient}</span
				>{#if index < flat_ingredients.length - 2}<span class="spacer">,{' '}</span>{/if}
				{#if index === flat_ingredients.length - 2}<span class="spacer">{' '}and{' '}</span>{/if}
			{/each}
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		list-style-type: none;
		flex-direction: column;
		gap: 2rem;
	}

	a {
		color: #7d0068;
	}

	.got {
		color: #bb3b80;
	}

	.spacer {
		color: #707070;
	}
</style>
