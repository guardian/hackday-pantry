<script>
	/** @type {import("../parser").Recipe[]} */
	export let list;
</script>

<ul>
	{#each list as { path, recipes_title }}
		<li><a href={path}>{recipes_title}</a></li>
	{/each}
</ul>
