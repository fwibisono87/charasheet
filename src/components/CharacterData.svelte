<script lang="ts">
    import { userStore, display } from '../lib/stores';
    import TextField from './TextField.svelte';
</script>

<div class="flex flex-col sm:flex-row justify-between gap-4">
    <div class="flex flex-col gap-4 mx-auto">
        <div class="hidden xs:block w-fit mx-auto">
            <TextField
            componentName="Character Name"
            type="full"
            bind:componentValue={$userStore.bio.name}
        />
        </div>
        <div class="xs:hidden w-full mx-auto">
            <TextField
            componentName="Name"
            bind:componentValue={$userStore.bio.name}
        />
        </div>
        <div class="flex flex-row gap-2 mx-auto">
            <input class="my-auto" id="show-physical-chars" type="checkbox" bind:checked={$display.showPhysicalCharacteristics} />
            <label class="my-auto select-none" for="show-physical-chars" >Show Physical Characteristics</label>
        </div>
    </div>
    <div class="flex flex-row justify-between justify-items-center flex-wrap w-[75%] gap-4 mx-auto">
        <div class="flex flex-row justify-between justify-items-center flex-wrap gap-4">
            <TextField componentName="Class" bind:componentValue={$userStore.bio.class} />
            <TextField componentName="Level" bind:componentValue={$userStore.bio.level} />
            <TextField componentName="Background" bind:componentValue={$userStore.bio.background} />
            <TextField componentName="Player Name" bind:componentValue={$userStore.bio.playerName} />
            <TextField componentName="Race" bind:componentValue={$userStore.bio.race} />
            <TextField componentName="Alignment" bind:componentValue={$userStore.bio.alignment} />
            <TextField componentName="Experience Points" bind:componentValue={$userStore.bio.xp} />
        </div>
        {#if $display.showPhysicalCharacteristics}
        <div class="flex flex-row justify-between justify-items-center flex-wrap gap-4">
            <TextField componentName="Age" bind:componentValue={$userStore.bio.appearance.age} />
            <TextField componentName="Height" bind:componentValue={$userStore.bio.appearance.height} />
            <TextField componentName="Weight" bind:componentValue={$userStore.bio.appearance.weight} />
            <TextField componentName="Eyes" bind:componentValue={$userStore.bio.appearance.eyes} />
            <TextField componentName="Skin" bind:componentValue={$userStore.bio.appearance.skin} />
            <TextField componentName="Hair" bind:componentValue={$userStore.bio.appearance.hair} />
        </div>
        {/if}
    </div>
</div>