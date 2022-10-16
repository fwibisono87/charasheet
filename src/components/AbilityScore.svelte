<script lang="ts">
	export let score = 0;
	export let componentName = '';

	$: modifier = Math.floor(score / 2) - 5;
	const snakeCase = (string: string) => {
		return string
			.replace(/\W+/g, ' ')
			.split(/ |\B(?=[A-Z])/)
			.map((word) => word.toLowerCase())
			.join('_');
	};
</script>

<div class="flex flex-col text-center" id={componentName}>
	<div class="flex flex-col" title="{componentName} Score">
		<label for={snakeCase(componentName)} class="text-center"> {componentName} </label>
		<input
			id={snakeCase(componentName)}
			type="number"
			bind:value={score}
			class="text-center py-2 "
		/>
	</div>
	<input
		title="Ability Score Modifier"
		id="modifier"
		type="number"
		bind:value={modifier}
		class="w-16 mx-auto text-center mt-1 cursor-not-allowed"
		disabled
	/>
</div>
