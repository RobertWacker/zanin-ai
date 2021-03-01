import { Service } from 'typedi';
import Axios from 'axios';

export class OpenweathermapService {
    private readonly weatherNames = ['novosibirsk', 'moscwa'];
    /**
     * Возвращает информацию о погоде в нужном городе
     * 
     * @param {String} city - имя города
     * @returns данные о погоде
     * todo нужно сделать чтобо принимала масив
     */
    async getWeatherInfo(city: string): Promise<WeatherStruct> {
        return await Axios.get('http://api.openweathermap.org/data/2.5/weather?q=novosibirsk&appid=79c31d379f5d6561bcc42610c0159cd1');
    }
}