import { Service } from 'typedi';
import Axios, { AxiosResponse } from 'axios';
import { GiphyEndpointTypes, GiphyRatingOptions } from './interfaces/request.interface';
import { IResponseBasic } from './interfaces/respopnse.interfaces';


@Service()
export class GiphyService {
    /**
     * Basic API address for Giphy.com
     */
    private readonly basicApiUrl = 'https://api.giphy.com/v1/gifs/';
    /**
     * Token for gifty API
     */
    private readonly apiToken: string = undefined;
    /**
     * Offset for search result from giphy.com
     */
    private readonly resultOffset: number = undefined;

    constructor() {
        this.apiToken = process.env.GIPHY_API_KEY;
        this.resultOffset = 0;
    }

    /**
     * 
     * @param endpoint 
     * @param query 
     * @param limit 
     * @param offset 
     */
    private async apiRequest(
        endpoint: GiphyEndpointTypes,
        query?: string,
        rating?: GiphyRatingOptions,
        limit?: number,
        offset?: number,
    ): Promise<IResponseBasic> {
        /** If the parameters are not available, set the default value  */
        if (!query) query = 'lol';
        if (!rating) rating = 'pg-13';
        if (!limit) limit = 1;

        /** Generate request address */
        const url = `${ this.basicApiUrl }/${ endpoint }?api_key=${ this.apiToken }&q=${ query }&limit=${ limit }&rating=${ rating }&offset=${ offset }`;
        
        let result: AxiosResponse<IResponseBasic> = undefined;

        try {
            result = await Axios.get(url);
        } catch (error) {
            console.error('[GiphyService.apiRequest] - Request error', error);
        }

        return result.data;
    }

    /**
     * 
     * @param query 
     */
    public async getOneRandomGif(query: string): Promise<string> {

        let result: IResponseBasic = undefined;
        result = await this.apiRequest('Random', query);

        if (!result) return undefined;

        return result.data[0].images.original.url;
    }
}

