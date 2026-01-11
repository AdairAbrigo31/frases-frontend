<script lang="ts">
	import { page } from '$app/state';
	import { saveQuote } from '$lib/services/api';
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';

	const idWork = $derived(page.params.idWork);
	const title = $derived(page.url.searchParams.get('title') || '');

	let quote = $state('');
	let isLoading = $state(false);
	let message = $state<{ type: 'success' | 'error'; text: string } | null>(null);

	async function handleSave() {
		if (!quote.trim() || !idWork) {
			message = { type: 'error', text: 'La frase es requerida' };
			return;
		}

		isLoading = true;
		message = null;

		try {
			await saveQuote({ quote: quote, idWork: idWork });
			message = { type: 'success', text: 'Frase guardada exitosamente' };
			quote = '';

			// Opcional: redirigir después de 2 segundos
			setTimeout(() => {
				goto(`/work/${idWork}`);
			}, 1000);
		} catch (error) {
			console.error('Error al guardar:', error);
			message = { type: 'error', text: 'Error al guardar la frase' };
		} finally {
			isLoading = false;
		}
	}
</script>

<main class="min-h-screen w-full p-6">
	<Header></Header>
	<h3 class="mb-6 text-3xl font-bold">
		Agregar frase a la obra: <span class="text-indigo-600">{title}</span>
	</h3>

	{#if message}
		<div
			class="mb-4 rounded-md p-3 {message.type === 'success'
				? 'border border-green-400 bg-green-100 text-green-700'
				: 'border border-red-400 bg-red-100 text-red-700'}"
		>
			{message.text}
		</div>
	{/if}

	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSave();
		}}
		class="space-y-4"
	>
		<div>
			<label for="quote" class="mb-1 block text-sm font-medium"> Frase: </label>
			<input
				type="text"
				id="quote"
				bind:value={quote}
				disabled={isLoading}
				class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
			/>
		</div>

		<div class="pt-4">
			<button
				type="submit"
				disabled={isLoading || !quote.trim()}
				class="flex items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
			>
				{#if isLoading}
					<svg
						class="mr-2 h-5 w-5 animate-spin text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					Guardando...
				{:else}
					Guardar
				{/if}
			</button>
		</div>
	</form>
</main>
