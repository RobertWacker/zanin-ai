// Todo: Remove later
import 'reflect-metadata';
import { Service, Container } from 'typedi';
import * as RandomNumber from 'random-number';
import { ApifyCovidService } from '../third-party/apify-covid/apify-covide.service';
import { CbrService } from '../third-party/cbr/cbr.service';
import { CoinmarketcapService } from '../third-party/coinmarketcap/coinmarketcap.service';
import { GiphyService } from '../third-party/giphy/giphy.service';
import { OpenweathermapService } from '../third-party/openweathermap/openweathermap.service';
import { IRatePhrases } from './interfaces/daily-post.interface';
// import {} from '../third-party/apify-covid/interfaces/covid.interface';
import { IExchangeRates, CurrencySymbol } from '../third-party/cbr/interfaces/currency.interface';
import randomNumber = require('random-number');
// import {} from '../third-party/coinmarketcap/interfaces/cryptocurrency.interface';
// import {} from '../third-party/giphy/interfaces/respopnse.interfaces';
// import {} from '../third-party/openweathermap/interfaces/weather.interface';
// import {} from '../third-party/rbk-rss/'

// @Service()
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
    /** 
     * Currency symbols to display
     */
    private readonly currencySymbols: CurrencySymbol[] = [
        'USD',
        'EUR',
    ]; 
    /** 
     * Percentage of likelihood to say a random phrases
     * The value can be from 0 to 100
     * The higher the value, the less chance of a random phrase
     */
    private readonly randomness = 70;
    /**
     * Comments for currency exchange rates
     */
    private readonly currencyRateDict: IRatePhrases = {
        up: {
            default: 'растет сука',
            random: [
                'улетает в космос',
                'опять цены вырастут',
                'пизда бензину',
                'огония рубля',
                'хуй, а не картошка по 25 рублей'
            ],
        },
        down: {
            default: 'падает блять',
            random: [
                'идет на дно',
                'пробивает днище',
                'становится ниже низкого',
                'будем оплакивать',
                'хуевое вложение',
                'надо было валютную ипотеку брать',
            ],
        }
    };
    /**
     * Comments for cryptocurrency exchange rates
     */
    private readonly cryptocurrencyRateDict: IRatePhrases = {
        up: {
            default: 'растет сука',
            random: [
                'бля надо было вкладываться',
                'пацаны тарим крипту',
                'жаль не майнил крипту'
            ]
        },
        down: {
            default: 'падает блять',
            random: [
                'залупа эта крипта',
                'чисто пирамида ебаная',
            ],
        }
    }

    constructor() {
        /** Init services */
        // this.apifyCovidService = Container.get(ApifyCovidService);
        this.cbrService = Container.get(CbrService);
        // this.coinmarketcapService = Container.get(CoinmarketcapService);
        // this.giphyService = Container.get(GiphyService);
        // this.openweathermapService = Container.get(OpenweathermapService);
    }

    /**
     * Generate complete daily post with different informations
     * @returns information post in string
     */
    public async generateDailyPost(): Promise<string> {
        /**
         * Preparing a block of exchange rates
         */
        let currencyRaw: IExchangeRates = undefined;
        currencyRaw = await this.cbrService.getDayChangesRate([]);

        let currency: string = undefined;
        if (currencyRaw) {
            currency = this.decorateCurencyExchangeRate(currencyRaw);
        }

        console.log(currency)

        /**
         * Preparing a block of yesterday news
         */
        let newsRaw = undefined;
        //newsRaw = await this.


        /** Combine information blocks into one */
        let dailyPost = '';
        dailyPost.concat(currency);

        return dailyPost;
    }

    private decorateCurencyExchangeRate(exchangeRates: IExchangeRates): string {
        /**
         * Work with dollar
         */
        if (!exchangeRates) return undefined;
        const usdRate = exchangeRates?.today?.USD;
        const usdDifference = exchangeRates?.difference?.USD;

        /** Add signt for positive number */
        let usdDifferenceSign: number | string = usdDifference;
        if (usdDifference > 0) usdDifferenceSign = '+' + usdDifference;

        /** Get random phrase fro USD */
        let usdPhrase: string = undefined;
        if (usdDifference > 0) {
            usdPhrase = this.getRandomPhrase(this.currencyRateDict, 'up');
        } else {
            usdPhrase = this.getRandomPhrase(this.currencyRateDict, 'down');
        }

        /**
         * Work with euro
         */
        const eurRate = exchangeRates?.today?.EUR;
        const eurDifference = exchangeRates?.difference?.EUR;

        /** Add signt for positive number */
        let eurDifferenceSign: number | string = eurDifference;
        if (usdDifference > 0) eurDifferenceSign = '+' + eurDifference;

        let eurPhrase: string = undefined;
        if (eurDifference > 0) {
            eurPhrase = this.getRandomPhrase(this.currencyRateDict, 'up');
        } else {
            eurPhrase = this.getRandomPhrase(this.currencyRateDict, 'down');
        }

        return `
            💵 USD: ${ usdRate } (${ usdDifferenceSign }) ${ usdPhrase }
            💶 EUR: ${ eurRate } (${ eurDifferenceSign }) ${ eurPhrase }
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

    private getRandomPhrase(dictonary: IRatePhrases, direction: 'up' | 'down'): string{
        const chance = RandomNumber.generator({
            min: 0,
            max: 100,
            integer: true,
        })()

        if (chance > (100 - this.randomness)) {
            const randomPhraseIndex = RandomNumber.generator({
                min: 0,
                max: dictonary[direction]?.random?.length -1,
                integer: true,
            })()

            return dictonary[direction]?.random[randomPhraseIndex];
        }

        return dictonary[direction]?.default;
    }
}
