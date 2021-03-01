import { Service } from 'typedi';
import { Repository } from 'typeorm';
import Axios from 'axios';
import { CovidEntity } from '../../../entities/covid.entity';

export class ApifyCovidService {
    private readonly basicApiUrl = 'https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true';

    getCovidStatistic
}