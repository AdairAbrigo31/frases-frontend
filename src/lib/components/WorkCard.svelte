<script lang="ts">
	import type { Work } from '$lib/types';

	let { work }: { work: Work } = $props();
</script>

<div class="relative my-6 flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
	<div class="p-4">
		<h5 class="mb-2 text-xl font-semibold text-slate-800">
			{work.title}
		</h5>
		<ul class="list-inside list-disc space-y-2 text-slate-700">
			{#each work.quotes as quote}
				<li>{quote.text}</li>
			{/each}
		</ul>
		<button
			class="mt-6 rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			type="button"
		>
			Ver más
		</button>
	</div>
</div>
