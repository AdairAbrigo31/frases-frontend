<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';

	const idWork = $derived(page.params.idWork);
	let { data }: PageProps = $props();
</script>

<main>
	<span class="bg-linear-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white ...">
		{data.work.title}</span
	>
	<p>Director: {data.work.director}</p>
	<p>Año: {data.work.year}</p>
	<button
		class="mt-6 rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
		type="button"
		onclick={() => {
			const searchParams = new URLSearchParams({
				title: data.work.title
			});
			goto(`/work/${data.idWork}/upload-quote?${searchParams}`);
		}}
	>
		Agregar frase
	</button>
</main>
