import axios from 'axios';

// Утро 11 декабря в хату:
// -------------
// $ 73.40 (-0.04) падает блять
// E 90.20 (-0.70) растет сука
// -------
// BTC: 2000$ (5000 руб) + 200$
// ETH: 289E (4000 руб) -10$
// -------
// НСК - 17, холодно блять
// МСК -4, порядочно

// /crypto
// расщиренная сводка крипты
// /weather
// расширенная погода
// /currency
// расшширеная валюта
// /atack
// выбрать человвека из чата и бот его атакует
interface DailyPost {
    currency: {
        dollar: CurrencyStruct,
        euro: CurrencyStruct
    },
    crypto: {
        btc: CurrencyStruct,
        eth: CurrencyStruct
    },
    weather: {
        nsk: WeatherStruct,
        msk: WeatherStruct,
    }
}

interface CurrencyStruct  {
    rate: number;
    rateRubles: number;
    difference: number; 
}
interface WeatherStruct {
    air: number;
    comfort: number;
    cloudiness:
    storm: 
}

class DailyPost {
    private readonly weatherApiUrl = '';
    private readonly currencyApiUrl = '';
    private readonly cryptoApiUrl = '';
    private readonly criptoNames = ['btc', 'eth'];
    private readonly currencyNames = ['usd', 'eur'];
    private readonly weatherNames = ['novosibirsk', 'moscwa'];

    constructor() {}

    /**
     * Возвращает общую сводку по валютам и погоде
     * на указнную дату
     * 
     * @param {Date} date - на какую дату информационная сводка 
     * @return
     */
    async getSummary(date: Date): DailyNewsPost {
        const cryptoNames
        const a = await this.getCurrencyInfo('');

    }

    /**
     * Возввращает данные о криптовалюте
     * 
     * @param {String} name - название криптовалюты
     * todo нужно сделать чтобо принимала масив
     * @returns
     */
    async getCryptoInfo(name: string): Promise<CurrencyStruct> {
        return await axios.get('');
    }

    /**
     * Возвращает информацию о курсе указанной валюту 
     * 
     * @param {String} name - сокращенное название валюты 
     * todo нужно сделать чтобо принимала масив
     * @returns данные о валюте
     */
    async getCurrencyInfo(name: string): Promise<CurrencyStruct> {
        return await axios.get('http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2002');
    }

    /**
     * Возвращает информацию о погоде в нужном городе
     * 
     * @param {String} city - имя города
     * @returns данные о погоде
     * todo нужно сделать чтобо принимала масив
     */
    async getWeatherInfo(city: string): Promise<WeatherStruct> {
        return await axios.get('http://api.openweathermap.org/data/2.5/weather?q=novosibirsk&appid=79c31d379f5d6561bcc42610c0159cd1');
    }
}

export default DailyPost;