<script lang="ts">
    import {page} from '$app/state';
    import type { PageProps } from './$types';
    const idMovie = $derived(page.params.idWork)
    let { data }: PageProps = $props();
</script>

<main>
    <h3>{data.movie.title}</h3>
    <p>Director: {data.movie.director}</p>
    <p>Año: {data.movie.year}</p>
</main>