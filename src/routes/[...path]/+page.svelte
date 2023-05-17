<script>
	import Header from '../../lib/Header.svelte';
	import Ingredient from '../../lib/Ingredient.svelte';
	export let data;
</script>

<Header />

<h1>{data.recipes_title}</h1>
<h2><a href={`https://www.theguardian.com${data.path}`}>See on the guardian.com</a></h2>

<h3>{data.serves}</h3>

{#each data.ingredients_lists as { title, ingredients }}
	<h2>{title}</h2>
	<ul>
		{#each ingredients as ingredient}
			<li><Ingredient {ingredient} /></li>
		{/each}
	</ul>
{/each}

<ol>
	{#each data.steps as step}
		<li>{step}</li>
	{/each}
</ol>
