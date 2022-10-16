<script lang="ts">
	import { userStore, display } from '../lib/stores';
	import CharacterData from '../components/CharacterData.svelte';
	import AbilityScores from '../components/AbilityScores.svelte';
</script>

<div class="flex flex-col gap-4 mx-5">
	<div class="flex flex-col bg-secondary p-5 rounded-lg gap-4">
		<CharacterData />
	</div>
	<div class="flex flex-col bg-secondary p-5 rounded-lg gap-4">
		<div class="mx-auto"><AbilityScores /></div>
	</div>
</div>
