<script lang="ts">
	import { userStore } from '../lib/stores';
	export let componentName: string;
	export let componentValue: string | number;
	export let type: 'short' | 'medium' | 'long' = 'medium';
</script>

<div
	class="flex flex-col {type === 'long' && 'w-64'} {type === 'medium' && 'w-32'} {type ===
		'short' && 'w-16'}"
>
	<label for={componentName}> {componentName} </label>
	<input id={componentName} type="text" bind:value={componentValue} />
</div>
