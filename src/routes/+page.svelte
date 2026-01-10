<script lang="ts">
	import type { PageProps } from './$types';
	import WorkCard from '$lib/components/WorkCard.svelte';

	let { data }: PageProps = $props();
</script>

<main>
	{#each data.works as work}
		<WorkCard {work} />
	{/each}
</main>
