<script lang="ts">
	import { userStore, display } from '../lib/stores';
	import TextField from './TextField.svelte';
	import AbilityScore from './AbilityScore.svelte';
</script>

<div class="flex flex-row justify-between justify-items-center flex-wrap gap-6">
	<AbilityScore componentName="Strength" bind:score={$userStore.abilityScores.strength} />
	<AbilityScore componentName="Dexterity" bind:score={$userStore.abilityScores.dexterity} />
	<AbilityScore componentName="Constitution" bind:score={$userStore.abilityScores.constitution} />
	<AbilityScore componentName="Intelligence" bind:score={$userStore.abilityScores.intelligence} />
	<AbilityScore componentName="Wisdom" bind:score={$userStore.abilityScores.wisdom} />
	<AbilityScore componentName="Charisma" bind:score={$userStore.abilityScores.charisma} />
</div>
