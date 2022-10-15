<script lang="ts">
	import { userStore } from '../lib/stores';
	export let componentName: string;
	export let componentValue: string|number;
	export let type: 'short' | 'medium' | 'long' | 'full' = 'medium'


</script>

<div class="flex flex-col {type==='long' && 'w-64'} {type==='medium' && 'w-32'} {type==='short' && 'w-16'} {type==="full" && 'w-full'}">
	<label for={componentName}> {componentName} </label>
	<input id="{componentName}" type='text' bind:value={componentValue} class="p-2" />
</div>