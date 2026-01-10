<script lang="ts">
	import { page } from '$app/state';
	import { saveWork } from '$lib/services/api';

	const idWork = $derived(page.params.idWork);
	const workTitle = $derived(page.url.searchParams.get('title') || '');

	let quote = $state('');

	async function handleSave() {
		console.log({ quote, idWork });
		//await saveWork({ quote, workId: idWork });
	}
</script>

<div class="mx-auto max-w-md p-6">
	<h1 class="mb-6 text-3xl font-bold">
		Agregar frase a: <span class="text-indigo-600">{workTitle}</span>
	</h1>
	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSave();
		}}
		class="space-y-4"
	>
		<!-- resto del form -->
	</form>
</div>
