// todo
// Сделать регулярку и добавление фраз

export interface Phrase {
    trigger: RegExp | RegExp[];
    expression: string | string[];
}

// Todo добавить 'Ой, %username% иди на хуй', '%username честно, иди на хуй'
export const dictonaryReplys = [
    'МОЖЕТ МНЕ УЙТИ',
    'МНЕ УЙТИ???',
    'Я родился с этим',
    'Сучара',
    'Да как ты заебал',
    'На блять',
    'игнорирую с декабря 2006 года',
    'Го сосаться',
];

export const dictonaryPhrases: Phrase[] = [
    {
        trigger: /\)\)/,
        expression: [
            'Ой. Блять ору',
            'Сука смеху до слез',
            'О блять для России',
            'Ассамчайтакойесть',
            'До слёз блять',
            '+',
            'Это пиздец)))))',
            'Сука чёт смешно))))',
            'Отдовай',
            'Огонь',
            'Там круто',
            'Лол',
            'Бля топ',
            'Мне нравится',
            'Лол'
        ],
    },
    {
        trigger: /моск/,
        expression: 'Да он только из далека может кудахтать',
    },
    {
        trigger: [
            /фриланс/,
            /заказ/,
        ],
        expression: 'У меня ещё один заказ на анимацию!!!!!',
    },
    {
        trigger: /куп/,
        expression: [
            'Огонь, я первый за покупками',
            'Смотрю ты депутат'
        ],
    },
    {
        trigger: /кто че/,
        expression: 'Ща кабины ломал',
    },
    {
        trigger: [
            /^да/,
            /^нет/,
        ],
        expression: 'Ога',
    },
    {
        trigger: /охуе/,
        expression: 'Сам ахуел))))))',
    },
    {
        trigger: /согл/,
        expression: 'Базара зироу',
    },
    {
        trigger: [
            /мусул/,
            /ислам/,
            /кадыр/,
            /взрыв/,
            /хлоп/,
            /мечет/,
            /аллах/,
            /каран/,
            /христиан/,
            /рпц/,
            /патриарх/,
            /бог/,
        ],
        expression: 'Вы просто не понимаете ислам!!!!',
    },
    {
        trigger: [
            /помни/,
            /был/,
            /раньше/,
        ],
        expression: 'Сейчас будет так же походу',
    },
    {
        trigger: [
            /юр/i,
            /вакер/i,
        ],
        expression: 'Юран гей',
    },
    {
        trigger: /калач/i,
        expression: [
            'Калач пидор, вангую',
            'Калач пидор',
        ]
    },
    {
        trigger: [
            /зарплат/,
            /деньги/,
            /денег/,
            /работ/
        ],
        expression: [
            'Вэбкам',
            'Закладки'
        ],
    },
    {
        trigger: /голос/,
        expression: 'Юран главный голосующий',
    },
    {
        trigger: /голос/,
        expression: 'Юран главный голосующий',
    },
    {
        trigger: [
            /раз/,
            /сколь/,
        ],
        expression: 'Да 2 раза',
    },
    {
        trigger: [
            /мерт/,
            /мира/,
        ],
        expression: 'Бомжи и алкаши тоже умрут',
    },
    {
        trigger: [
            /уезж/,
            /уехать/,
        ],
        expression: [
            'Чур я во Францию',
            'Тихаю',
            'Куда поехал?',
        ],
    },
    {
        trigger: /цен/,
        expression: [
            'Бюджетно',
            'Братан цена вопроса',
        ],
    },
    {
        trigger: /^ок/,
        expression: 'Все окок',
    },
    {
        trigger: /мажор/,
        expression: 'Он туда гуся заказывает из ресторанов пидор',
    },
    {
        trigger: [
            /выше/,
            /было/,
            /скидывал/,
            /баян/,
        ],
        expression: 'Ты нахуй постишь те же новости?)))))',
    },
    {
        trigger: [
            /дтп/,
            /авари/,
        ],
        expression: 'Летает мимо дороги как ты по рельсам',
    },
    {
        trigger: [
            /хуав/,
            /huawei/,
            /камер/,
        ],
        expression: [
            'Теперь блять понятно почему забанили хуавей))))',
            'Про камеру молчу, фотовозможности хуавей уже пару лет как недосягаемы другими компаниями',
            'Видео хромает, но не сильно',
        ],
    },
    {
        trigger: /отпус/,
        expression: 'Никогда не опускать!!!!'
    },
    {
        trigger: /повыс/,
        expression: 'А тебя понизили'
    },
    {
        trigger: /машин/,
        expression: 'Тут пространства с зади прям ок'
    },
    {
        trigger: /говори/,
        expression: [
            'Просто говорю, что никогда небыло такого совпадения',
            'Я тебе 20 раз говорит',
        ],
    },
    {
        trigger: [
            /понят/,
            /понял/,
        ],
        expression: [
            'Нихуя не понятно, ну вот совсем',
            'Не совсем понятно',
        ],
    },
    {
        trigger: /бункер/,
        expression: 'Найди путена',
    },
    {
        trigger: /новост/,
        expression: 'Да хорошие новости',
    },
    {
        trigger: /рубл/,
        expression: [
            'Оцени падение',
            'Какие нахуй твои там санкции',
        ],
    },
    {
        trigger: /где/,
        expression: 'в ведре с твоими слезами',
    },
    {
        trigger: /дизайн/,
        expression: 'О дизинг лучше гораздо',
    },
    {
        trigger: /скин/,
        expression: 'Жалко дикпик не скинул',
    },
    {
        trigger: /наеб/,
        expression: 'Если почитать статью, то людей наебывают со всей силы',
    },
    {
        trigger: /чур/,
        expression: 'Ебаные обезьяны',
    },
    // {
    //     trigger: / */,
    //     expression: [
    //         'Ожидаемо',
    //         'Псы ебаные',
    //         'На нахуй',
    //         'Я по жизни',
    //         'Встовай',
    //         'Но этот стол это пиздец',
    //         'Сукааааааааааааа',
    //         'Оскара сюда',

    //         'Совпадение?',
    //         'Што ты за хуйню пронес',
    //         'Знаешь почему?',
    //         'с хуев пояснил',
    //         'Я угадал',
    //         'Яж говорил)))))))))',
    //         'Расходимся, они все узнали',
    //     ],
    // },
];

export class PhrasesService {
    private static _instance: PhrasesService;
    private constructor() {}
    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    /**
     * Проверяет списки триггеров на сообщении для получения фразы
     * @param msg 
     */
    public checkPhrase(msg: string) {
        console.log('Входящее сообщение', msg)
        for (let i = 0; i < dictonaryPhrases.length; i++) {
            const trigger = dictonaryPhrases[i].trigger;
            const phrases = dictonaryPhrases[i].expression

            // Проверяем список тригеров
            if (Array.isArray(trigger)) {
                for (let k = 0; k < trigger.length; k++) {
                    if (trigger[k].test(msg)) {
                        return this.getRandomPhrase(phrases);
                        break;
                    }
                }
            }
            // Одиночный тригер
            else {
                if (trigger.test(msg)) {
                    return this.getRandomPhrase(phrases);
                    break;
                }
            }
            
        }
        
    }

    /**
     * Возвращает случайную фразу из списка к тригеру
     * @param phrases 
     */
    private getRandomPhrase(phrases: string | string[]) {
        if (Array.isArray(phrases)) {
            return phrases[Math.floor(Math.random() * phrases.length)]
        }
        else {
            return phrases;
        }
    }

    /**
     * Todo: Реализовать ответы на reply
     */
    public getRandomReply() {
        return dictonaryReplys[Math.floor(Math.random() * dictonaryReplys.length)];
    }
};