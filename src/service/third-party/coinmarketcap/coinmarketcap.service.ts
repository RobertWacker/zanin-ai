import { Service } from 'typedi';
import { Repository } from 'typeorm'
import Axios, { AxiosResponse } from 'axios';
import { IResponseBasic } from './interfaces/response.interface';
 
@Service()
export class CoinmarketcapService {
    /** Token for CoinMarketCap API */
    private readonly apiToken: string;

    constructor() {
        this.apiToken = process.env.COINMARKETCAP_API_KEY;
    }

    /**
     * Returns general information about the rate of cryptocurrencies and
     * changes in the value of currencies
     */
    public async getExchangeRates(): Promise<IResponseBasic> {
        /** Get currency rates in rubles  */
        const converCurrency = 'RUB';
        const start = 1;
        /** Numbers of results on request */
        const limit = 2;

        /** Adding query parameters */
        const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=${ converCurrency }&start=${ start }&limit=${ limit }`;

        /** Header token for auth */
        const headers = {
            'X-CMC_PRO_API_KEY': this.apiToken,
        };

        let result: AxiosResponse<IResponseBasic> = undefined;

        try {
            result = await Axios.get(url, {
                headers: headers,
            })
        } catch (error) {
            console.log('[CoinmarketcapService.getExchangeRates] - Request error', error);
        }

        return result.data;
    }
}