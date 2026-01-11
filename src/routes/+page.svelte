<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchWorks } from '$lib/services/api';
	import WorkCard from '$lib/components/WorkCard.svelte';

	let works = $state<any[]>([]);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(async () => {
		try {
			loading = true;
			works = await fetchWorks();
			error = null;
		} catch (e) {
			error = e instanceof Error ? e.message : 'Error al cargar las obras';
			console.error('Error fetching works:', e);
		} finally {
			loading = false;
		}
	});
</script>

<main class="min-h-screen w-full p-6">
	{#if loading}
		<div class="mt-4 text-center">
			<p class="text-gray-600">Cargando obras...</p>
		</div>
	{:else if error}
		<div class="mt-4 rounded-md bg-red-50 p-4 text-red-800">
			<p>Error: {error}</p>
		</div>
	{:else if works.length === 0}
		<div class="mt-4 text-center">
			<p class="text-gray-600">No hay obras disponibles</p>
		</div>
	{:else}
		<div class="flex h-full w-full flex-col gap-4">
			<button
				onclick={() => (window.location.href = '/upload-work')}
				class="w-fit rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-slate-700"
			>
				AGREGAR OBRA
			</button>
			<div class="grid w-full grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each works as work (work.id)}
					<WorkCard {work} />
				{/each}
			</div>
		</div>
	{/if}
</main>
