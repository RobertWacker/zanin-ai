export interface IResponseBasic {
    status: number;
    data: ICoinData[];
}

export interface IResponseStatus {
    timestamp: Date;
    error_code: number;
    error_message: null | string;
    elapsed: number;
    credit_count: number;
    notice: null | string;
    total_count: number;
}
export interface ICoinData {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: Date;
    tags: string[],
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    platform: null | string;
    cmc_rank: number;
    last_updated: Date;
    quote: {
        RUB: {
            price: number;
            volume_24h:  number;
            percent_change_1h: number;
            percent_change_24h: number;
            percent_change_7d: number;
            percent_change_30d: number;
            market_cap:  number;
            last_updated: Date;
        }
    }
}