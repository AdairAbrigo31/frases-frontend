<script lang="ts">
  import type { Work } from "$lib/types";
  
  let { work }: { work: Work } = $props();
</script>

<div class="work-card">
  <h2>{work.id} - {work.title}</h2>
  {#each work.quotes as quote}
    <p>{quote.text}</p>
  {/each}
  <a href="/works/{work.id}">Ver más</a>
</div>