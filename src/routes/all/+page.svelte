<script>
	export let data;
</script>

<ul>
	{#each data.recipes as recipe, index}
		{#if data.recipes[index - 1]?.ingredients !== recipe.ingredients}
			<h3>
				Recipes with {recipe.ingredients} ingredients
			</h3>
		{/if}
		<li>
			<a href={`${recipe.path}/${recipe.recipeId}`}>{recipe.recipes_title}</a>
		</li>
	{/each}
</ul>
