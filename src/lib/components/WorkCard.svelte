<script lang="ts">
	import type { Work } from '$lib/types';
	let { work }: { work: Work } = $props();
</script>

<div class="relative my-6 flex w-96 flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
	<div class="p-4">
		<h5 class="mb-2 text-xl font-semibold text-slate-800">
			{work.title}
		</h5>
		<p>Director: {work.director}</p>
		<button
			class="mt-6 rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			type="button"
			onclick={() => (window.location.href = `/work/${work.id}`)}
		>
			Ver más
		</button>
	</div>
</div>
