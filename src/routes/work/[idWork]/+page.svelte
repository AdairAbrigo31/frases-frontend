<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { fetchWorkById } from '$lib/services/api'; // Ajusta la ruta según tu estructura
	import Header from '$lib/components/Header.svelte';

	// Estado reactivo usando runes de Svelte 5
	let work = $state<any>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);
	let workId = $derived(page.params.idWork);

	onMount(async () => {
		try {
			loading = true;
			work = await fetchWorkById(workId!);
			error = null;
		} catch (e) {
			error = e instanceof Error ? e.message : 'Error al cargar la obra';
			console.error('Error fetching work:', e);
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<div class="mx-auto max-w-md p-6 text-center">
		<p class="text-gray-600">Cargando Citas...</p>
	</div>
{:else if error}
	<div class="mx-auto max-w-md p-6">
		<div class="rounded-md bg-red-50 p-4 text-red-800">
			<p>Error: {error}</p>
		</div>
	</div>
{:else if work}
	<main class="min-h-screen w-full p-6">
		<Header></Header>
		<div
			class="mx-auto max-w-md flex-col rounded-lg border border-slate-600 bg-slate-800 p-6 p-8 shadow-sm"
		>
			<div class="m-0 mb-4 border-b border-slate-600 pb-4 text-center text-slate-100">
				<h2 class="mt-4 flex justify-center gap-1 text-4xl font-bold text-white">
					{work.title}
				</h2>
				<p class="mt-2 text-sm font-semibold text-slate-300 uppercase">
					{work.director} - {work.year}
				</p>
			</div>
			<div class="m-4 p-5">
				{#if work.quotes && work.quotes.length > 0}
					<ul class="list-inside list-disc space-y-2 text-slate-700">
						{#each work.quotes as quote (quote.id)}
							<li class="pt-1 pb-2 text-slate-300">
								{quote.text}
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-center text-slate-400">No hay frases disponibles</p>
				{/if}
			</div>
			<button
				class="w-full min-w-32 rounded-md border border-transparent bg-white px-4 py-2 text-center text-sm text-slate-600 shadow-md transition-all hover:bg-white/90 hover:shadow-lg focus:bg-white/90 focus:shadow-none active:bg-white/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
				onclick={() => {
					const params = new URLSearchParams({ title: work.title });
					goto(`/work/${work.id}/upload-quote?${params.toString()}`);
				}}
			>
				Agregar frase
			</button>
		</div>
	</main>
{/if}
