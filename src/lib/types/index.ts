export interface Work {
    id: number;
    title: string;
    director: string;
    year: string;
    quotes: Array<Quote>;
}

export interface Quote {
    text: string;
}