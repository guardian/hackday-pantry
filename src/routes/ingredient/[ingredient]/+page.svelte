<script>
	import Recipes from '../../../lib/Recipes.svelte';

	export let data;
</script>

<Recipes list={data.recipes} />
