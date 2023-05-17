<script>
	/** @type {import("../parser").Recipe[]} */
	export let list;
</script>

<ul>
	{#each list as { path, recipes_title, recipeId }}
		<li><a href={`${path}/${recipeId}`}>{recipes_title}</a></li>
	{/each}
</ul>
