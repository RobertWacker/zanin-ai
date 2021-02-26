import 'reflect-metadata';
import * as Express from 'express';
import * as Dotenv from 'dotenv';
import { bot } from './bot';

/** Parse env config */
Dotenv.config();

const app: Express.Application = Express();

if (!process.env.HOOK_URL) bot.launch();
else {
    app.use(bot.webhookCallback('/' + process.env.TELEGRAM_BOT_TOKEN));
    bot.telegram.setWebhook(process.env.HOOK_URL + process.env.TELEGRAM_BOT_TOKEN || 'localhost:3000');

    console.log('set webhook: ', process.env.HOOK_URL + process.env.TELEGRAM_BOT_TOKEN);

    
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Epress app listening on port ${process.env.PORT || 3000}!`)
    });
}