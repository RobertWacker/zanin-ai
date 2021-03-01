export type CurrencySymbol = 'EUR' | 'USD';

export interface IChangesRates {
    today: ICurrencyObject;
    yesterday: ICurrencyObject;
}

export interface ICurrencyObject {
    [value: string]: number;
}

export interface IResponseBasic {
    ValCurs: {
        Valute: IResponseValute[]
    }
}

export interface IResponseValute {
    /**
     * @example 840
     */
    NumCode: number;
    /**
     * @example 'USD'
     */
    CharCode: string;
    /**
     * @example 1
     */
    Nominal: number;
    /**
     * @example 'Доллар США'
     */
    Name: string;
    /**
     * @example '30,9436'
     */
    Value: string;
}