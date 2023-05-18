<script>
	export let data;
</script>

Found {data.ingredients.size} individual ingredients.

<ul>
	{#each [...data.ingredients.entries()].sort(([, a], [, b]) => b - a) as [ingredient, count]}
		<li><a href={`/ingredient/${ingredient.replaceAll(' ', '_')}`}>{ingredient}</a> ({count})</li>
	{/each}
</ul>
