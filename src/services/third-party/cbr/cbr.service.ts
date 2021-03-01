import { Service } from 'typedi';
import Axios, { AxiosResponse } from 'axios';
import { parse } from 'fast-xml-parser';
import {
    ICurrencyObject,
    IChangesRates,
    CurrencySymbol,
    IResponseBasic
} from './interfaces/currency.interface';

@Service()
export class CbrService {
    private readonly basicApiUrl = 'http://www.cbr.ru/scripts/XML_daily.asp';

    public async getCurrencyRate(date?: Date, symbol?: CurrencySymbol[]): Promise<ICurrencyObject> {
        /**
         * If the date param has not been passed, set the current by default
         */
        if(!date) date = new Date();
        /**
         * If the currency symbol param has not been passed, set the symbols by default
         */
        if(!symbol) symbol = ['USD', 'EUR'];
        /**
         * Formating date
         */
        const queryDate: string = this.dateParser(date);
        /**
         * Preparing a url assress
         */
        const url = this.basicApiUrl + '?date_req=' + queryDate;
        console.log(url)
        let result: AxiosResponse<string> = undefined;

        try {
            result = await Axios.get(url);
        } catch (error) {
            console.log('[CberService.getCurrentRate] - Request error', error);
            return undefined;
        }

        /**
         * Get rates
         */
        const rate = this.parseRateXML(result.data, symbol);

        if (!rate) return undefined;

        return rate;
    }

    /**
     * Returns the difference in rates per day
     */
    public async getDayChangesRate(symbol?: CurrencySymbol[]): Promise<IChangesRates> {
        const dateNow = new Date();
        let dateYesterday = this.getYesterdayDate();

        const today = await this.getCurrencyRate(dateNow);
        const yesterday = await this.getCurrencyRate(dateYesterday);

        return {
            today,
            yesterday
        };
    }

    /**
     * Returns the difference in rates per week
     * Todo: Relase this later..
     */
    public async getWeekChangesRate() {}
    /**
     * Returns the difference in rates per month
     * Todo: Relase this later..
     */
    public async getMonthChangesRate() {}

    /**
     * Returns a date like 02/03/2002
     */
    private dateParser(date: Date): string {
        if (!date) return undefined;

        let day = date.getDate().toString();
        if (day.length == 1) day = '0' + day;

        let month = date.getMonth().toString();
        if (month.length == 1) month = '0' + month;

        const year = date.getFullYear();

        return `${ day }/${ month }/${ year }`;
    }

    /**
     * Parse currency rate from XML data
     */
    private parseRateXML(xml: string, symbol: CurrencySymbol[]): ICurrencyObject {
        if (!xml || !symbol) return undefined;

        /** Parse XML to JSON */
        let parsedXML: IResponseBasic = undefined;

        try {
            parsedXML = parse(xml);
        } catch (error) {
            console.log('[CbrService.parseRateXML] - Parse error', error);
            return undefined;
        }
        console.dir(parsedXML.ValCurs.Valute)

        /** List of all currencies */
        const currencyRateList = parsedXML?.ValCurs?.Valute;

        let rateObject: ICurrencyObject = {};

        for (const currency of symbol) {
            let rate = undefined;
            for (let index = 0; index < currencyRateList.length; index++) {
                if (currencyRateList[index]?.CharCode == currency) {
                    const rateValue = currencyRateList[index]?.Value;

                    /** Remove comma in value */
                    const correctRate = parseFloat(rateValue.split(",").join("."));
                    rateObject[currency] = correctRate;
                }
            }
        }

        return rateObject;
    }

    /**
     * Returns a yesterday value
     */
    private getYesterdayDate(): Date {
        const currentDate = new Date();
        let yesterday = currentDate.setDate(currentDate.getDate() - 1);
        return new Date(yesterday);
    }
}


const a = new CbrService;
const b = a.getDayChangesRate().then(kek=>console.log(kek));