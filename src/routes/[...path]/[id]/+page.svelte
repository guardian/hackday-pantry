<script>
	import Header from '../../../lib/Header.svelte';
	import Ingredient from '../../../lib/Ingredient.svelte';
	import Title from '../../../lib/Title.svelte';
	import Step from '../../../lib/Step.svelte';

	export let data;
</script>

<Header />

<main>
	<Title title={data.recipes_title} />

	View the full article on <a href={`https://www.theguardian.com${data.path}`}>guardian.co.uk</a>

	<h3>{data.serves}</h3>

	{#each data.ingredients_lists as { title, ingredients }}
		<h4>{title}</h4>
		<ul>
			{#each ingredients as ingredient}
				<li>
					<Ingredient {ingredient} />
				</li>
			{/each}
		</ul>
	{/each}

	<!-- <ol> -->
	{#each data.steps as step, index}
		<Step text={step} step_number={index + 1} />
	{/each}
	<!-- </ol> -->
</main>

<style>
	h2 {
		margin-top: 6rem;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	a {
		color: #0077b6;
		text-decoration: underline;
	}

	main {
		padding: 16px;
	}
</style>
