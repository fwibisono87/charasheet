<script>
	import '../app.css';

    // import {update} from 'svelte/store'


</script>

<div class="flex flex-col w-screen min-h-screen bg-primary">
    <div class="flex flex-row p-4">
        <h1 class="text-4xl text-white font-semibold">DnD 5e Character Sheet</h1>
        
    </div>
    <slot />
</div>
