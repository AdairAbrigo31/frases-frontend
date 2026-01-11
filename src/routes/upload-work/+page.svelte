<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import { saveWork } from '$lib/services/api';
	let type = $state('');
	let title = $state('');
	let director = $state('');
	let year = $state(0);
	let isLoading = $state(false);

	async function handleSave() {
		if (!type || !title || !director || !year) {
			return;
		}

		isLoading = true;
		try {
			await saveWork({ type, title, director, year: year.toString() });
			type = '';
			title = '';
			director = '';
			year = 0;

			setTimeout(() => {
				goto(`/`);
			}, 1000);
		} catch (error) {
			console.error('Error al guardar la obra:', error);
		} finally {
			isLoading = false;
		}
	}
</script>

<main class="min-h-screen w-full p-6">
	<Header></Header>

	<div class="mx-auto max-w-md">
		<h3 class="text-1xl mb-6 font-bold">Agrega tu frase</h3>

		<form
			onsubmit={(e) => {
				e.preventDefault();
				handleSave();
			}}
			class="space-y-4"
		>
			<div>
				<label for="type" class="mb-1 block text-sm font-medium"> Tipo: </label>
				<select
					id="type"
					bind:value={type}
					class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				>
					<option value="" disabled>---------</option>
					<option value="MOVIE">Pelicula</option>
					<option value="BOOK">Libro</option>
				</select>
			</div>

			<div>
				<label for="title" class="mb-1 block text-sm font-medium"> Titulo: </label>
				<input
					type="text"
					id="title"
					bind:value={title}
					class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<div>
				<label for="director" class="mb-1 block text-sm font-medium"> Director o Escritor: </label>
				<input
					type="text"
					id="director"
					bind:value={director}
					class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<!-- Year -->
			<div>
				<label for="year" class="mb-1 block text-sm font-medium"> Año: </label>
				<input
					type="number"
					id="year"
					bind:value={year}
					class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<div class="pt-4">
				<button
					type="submit"
					disabled={isLoading}
					class="flex items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
				>
					{#if isLoading}
						<svg
							class="mr-2 h-5 w-5 animate-spin text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
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
	</div>
</main>
