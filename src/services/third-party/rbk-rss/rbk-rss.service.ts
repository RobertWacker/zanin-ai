import { Service } from 'typedi';
import * as RSSParser from 'rss-parser';
import Axios, { AxiosResponse } from 'axios';

@Service()
export class RbkRssService {
    private readonly rssUrlBasic = 'http://static.feed.rbc.ru/rbc/logical/footer/news.rss';
    private readonly returnNewsNumber = 5;
    private readonly rssParserInstance: RSSParser;

    constructor() {
      this.rssParserInstance = new RSSParser();
    }

    public async rssRequest(): Promise<string> {
      let response: AxiosResponse<string> = undefined;
      response = await Axios.get(this.rssUrlBasic);

      return response.data;
    }

    public async getNewsList(): Promise<string[]> {
      const data = await this.rssRequest();
      const parsedNews = await this.rssParserInstance.parseString(data);

      const news = [];
      for (let index = 0; index < this.returnNewsNumber; index++) {
        news.push(parsedNews.items[index].title);
      }

      return news;
    }
}

// Todo: remove it later
// const a = new RbkRssService();
// a.getNewsList().then(kek=>console.log(kek));