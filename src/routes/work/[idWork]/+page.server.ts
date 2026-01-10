import type { PageServerLoadEvent } from "./$types";

export async function load({ params, fetch }: PageServerLoadEvent) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_FRASES}/works/${params.idWork}`);
  const work = await response.json();

  return {
    work
  };
}