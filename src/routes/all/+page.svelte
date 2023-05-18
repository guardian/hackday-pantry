<script>
	export let data;
</script>

<ul>
	{#each data.recipes as recipe}
		<li><a href={`${recipe.path}/${recipe.recipeId}`}>{recipe.recipes_title}</a></li>
	{/each}
</ul>
