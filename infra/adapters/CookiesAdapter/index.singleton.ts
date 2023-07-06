import { ICookies } from './index.gateway'
import { CookiesAdapter } from './index.adapter'

export class CookieAdapterSingleton {
    private static instance: ICookies

    private constructor() { }

    static getInstance(): ICookies {
        if (!CookieAdapterSingleton.instance) {
            CookieAdapterSingleton.instance = new CookiesAdapter()
        }

        return CookieAdapterSingleton.instance
    }
}