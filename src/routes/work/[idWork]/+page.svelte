<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	let { data }: { data: PageData } = $props();
</script>

<main
	class="mx-auto max-w-md flex-col rounded-lg border border-slate-600 bg-slate-800 p-6 p-8 shadow-sm"
>
	<div class="m-0 mb-4 border-b border-slate-600 pb-4 text-center text-slate-100">
		<h2 class="mt-4 flex justify-center gap-1 text-4xl font-bold text-white">
			{data.work.title}
		</h2>
		<p class="mt-2 text-sm font-semibold text-slate-300 uppercase">
			{data.work.director} - {data.work.year}
		</p>
	</div>
	<div class="m-4 p-5">
		<ul class="list-inside list-disc space-y-2 text-slate-700">
			{#each data.work.quotes as quote}
				<li class="pt-1 pb-2 text-slate-300">
					{quote.text}
				</li>
			{/each}
		</ul>
	</div>
	<button
		class="w-full min-w-32 rounded-md border border-transparent bg-white px-4 py-2 text-center text-sm text-slate-600 shadow-md transition-all hover:bg-white/90 hover:shadow-lg focus:bg-white/90 focus:shadow-none active:bg-white/90 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
		type="button"
		onclick={() => {
			const params = new URLSearchParams({ title: data.work.title });
			goto(`/work/${data.work.id}/upload-quote?${params.toString()}`);
		}}
	>
		Agregar frase
	</button>
</main>
