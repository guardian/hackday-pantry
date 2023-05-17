<script>
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
	{#each data.recipes as { path, recipes_title }}
		<li><a href={path}>{recipes_title}</a></li>
	{/each}
</ul>
