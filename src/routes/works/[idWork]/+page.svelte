<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';

	const idMovie = $derived(page.params.idWork);
	let { data }: PageProps = $props();
</script>

<main>
	<span class="bg-linear-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white ...">
		{data.movie.title}</span
	>
	<p>Director: {data.movie.director}</p>
	<p>Año: {data.movie.year}</p>
</main>
