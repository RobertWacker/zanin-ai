import { Service, Container } from 'typedi';
import { ApifyCovidService } from '../third-party/apify-covid/apify-covide.service';
import { CbrService } from '../third-party/cbr/cbr.service';
import { CoinmarketcapService } from '../third-party/coinmarketcap/coinmarketcap.service';
import { GiphyService } from '../third-party/giphy/giphy.service';
import { OpenweathermapService } from '../third-party/openweathermap/openweathermap.service';
import {} from '../third-party/apify-covid/interfaces/covid.interface';
import { IExchangeRates } from '../third-party/cbr/interfaces/currency.interface';
import {} from '../third-party/coinmarketcap/interfaces/cryptocurrency.interface';
import {} from '../third-party/giphy/interfaces/respopnse.interfaces';
import {} from '../third-party/openweathermap/interfaces/weather.interface';
import {} from '../third-party/rbk-rss/'

@Service()
export class DailyPostService {
    /**
     * Covid monitoring service
     */
    private readonly apifyCovidService: ApifyCovidService;
    /**
     * Currency rates from Cental bank of Russia service
     */
    private readonly cbrService: CbrService;
    /**
     * Cryptocurrency rate's service
     */
    private readonly coinmarketcapService: CoinmarketcapService;
    /**
     * Gif files service
     */
    private readonly giphyService: GiphyService;
    /**
     * Weather service
     */
    private readonly openweathermapService: OpenweathermapService;

    constructor() {
        /** Init services */
        this.apifyCovidService = Container.get(ApifyCovidService);
        this.cbrService = Container.get(CbrService);
        this.coinmarketcapService = Container.get(CoinmarketcapService);
        this.giphyService = Container.get(GiphyService);
        this.openweathermapService = Container.get(OpenweathermapService);
    }

    /**
     * Generate complete daily post with different informations
     * @returns information post in string
     */
    public async generateDailyPost(): string {
        /**
         * Preparing a block of exchange rates
         */
        let currencyRaw: IExchangeRates = undefined;
        currencyRaw = await this.cbrService.getDayChangesRate();

        let currency: string = undefined;
        if (currencyRaw) {
            currency = this.decorateCurencyExchangeRate(currencyRaw);
        }

        /**
         * Preparing a block of yesterday news
         */
        let newsRaw = undefined;
        newsRaw = await this.


        /** Combine information blocks into one */
        let dailyPost: string = undefined;
        dailyPost.concat(currency, );

        return dailyPost;
    }

    private decorateCurencyExchangeRate(exchangeRates: IExchangeRates): string {

        return `
            💵 USD: 74.57 (+0.04) падает блять
            💶 EUR: 92.30 (-0.70) растет сука
        `;
    }

    private decorateYesterdayMainNews(): string {
        return `
            📰 Важное за вчерашний день:
            - В МИДе пообещали ответить на санкции ЕС по делу Навального
            - Волонтер рассказала о болезни экс-участницы Little Big
            - Финляндия ввела чрезвычайное положение из-за роста заболеваемости COVID
        `;
    }
    private decorateCryptocurrencyExcahangeRates(): string {
        return `
            💳 Криптовалюта:
            BTC: 5000 руб (+200$) падает блять
            ETH: 4000 руб (-10$) растет сука
        `;
    }

    private decorateCovidStatistics(): string {
        return `
            Короновирус:
            🤢 134 000 чел (+900)
            ⚰️ 27 000 чел (+17)
        `;
    }

    private decorateWeather(): string{
        return `
            Погода:
            🌤 МСК -4, порядочно
            🌨 НСК - 17, холодно блять
        `;
    }

}