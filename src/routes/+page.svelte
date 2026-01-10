<script lang="ts">
	import type { PageProps } from './$types';
	import WorkCard from '$lib/components/WorkCard.svelte';

	let { data }: PageProps = $props();
</script>

<main class="mx-auto max-w-md p-6">
	<button
		onclick={() => (window.location.href = '/upload-work')}
		class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-slate-700"
	>
		AGREGAR OBRA
	</button>
	{#each data.works as work}
		<WorkCard {work} />
	{/each}
</main>
