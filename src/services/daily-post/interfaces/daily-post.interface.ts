export interface IRatePhrases {
    up: IDictonaryPhrases;
    down: IDictonaryPhrases;
}

export interface IDictonaryPhrases {
    default: string;
    random: string[];
}