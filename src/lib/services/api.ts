export async function saveWork({ type, title, director, year }: {
    type: string;
    title: string;
    director: string;
    year: string
}) {
    console.log({ type, title, director, year });

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