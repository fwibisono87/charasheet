<script lang="ts">
    import { userStore, display } from '../lib/stores';
    import TextField from './TextField.svelte';
</script>

<div class="flex flex-col sm:flex-row justify-between gap-4">
    <div class="flex flex-row justify-between justify-items-center flex-wrap gap-4 mx-auto">
        <div class="flex flex-row justify-between justify-items-center flex-wrap gap-4">
            <TextField componentName="Strength" bind:componentValue={$userStore.abilityScores.strength.score} />
            <TextField componentName="Dexterity" bind:componentValue={$userStore.abilityScores.dexterity.score} />
            <TextField componentName="Constitution" bind:componentValue={$userStore.abilityScores.constitution.score} />
            <TextField componentName="Intelligence" bind:componentValue={$userStore.abilityScores.intelligence.score} />
            <TextField componentName="Wisdom" bind:componentValue={$userStore.abilityScores.wisdom.score} />
            <TextField componentName="Charisma" bind:componentValue={$userStore.abilityScores.charisma.score} />
        </div>
    </div>
</div>