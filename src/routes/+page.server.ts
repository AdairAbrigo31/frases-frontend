import type { PageServerLoadEvent } from "./$types";

export async function load({ fetch }: PageServerLoadEvent) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_FRASES}/works`);
  const works = await response.json();  
  return {
    works
  };
}