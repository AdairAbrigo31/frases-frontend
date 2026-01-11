export async function fetchWorks() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_FRASES}/works`);
    if (!response.ok) {
        throw new Error('Failed to fetch works');
    }
    return await response.json();
}


export async function fetchWorkById(idWork: string) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_FRASES}/works/${idWork}`);
    if (!response.ok) {
        throw new Error('Failed to fetch work');
    }
    return await response.json();
}


export async function saveWork({ type, title, director, year }: {
    type: string;
    title: string;
    director: string;
    year: string
}) {

    const response = await fetch(`${import.meta.env.VITE_BACKEND_FRASES}/works/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type, title, director, year })
    });

    if (!response.ok) {
        throw new Error('Failed to save work');
    }

    return await response.json();
}


export async function saveQuote({ quote, idWork }: {
    quote: string;
    idWork: string;
}) {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_FRASES}/quotes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'text': quote, 'work': idWork })
    });

    if (!response.ok) {
        throw new Error('Failed to save quote');
    }

    return await response.json();
}