import Telegraf from 'telegraf';
import CommandParts from 'telegraf-command-parts';
import { PhrasesService } from '../service/phrases.service';


export const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
// bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.on('message', (ctx) => {
    if((Math.random() * 10) + 1 > 5) ctx.reply(PhrasesService.Instance.checkPhrase(ctx.message.text))
});
console.log('телегdа запущена')

