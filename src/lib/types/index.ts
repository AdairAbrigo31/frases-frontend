export interface Work {
    id: number;
    title: string;
    quotes: Array<Quote>;
}

export interface Quote {
    text: string;
}