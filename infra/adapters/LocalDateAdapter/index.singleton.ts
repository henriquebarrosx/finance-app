import { ILocalDate } from './index.gateway'
import { DateFnsAdapter } from './index.adapter'

export class LocalDateAdapterSingleton {
    private static instance: ILocalDate

    private constructor() { }

    static getInstance(): ILocalDate {
        if (!LocalDateAdapterSingleton.instance) {
            LocalDateAdapterSingleton.instance = new DateFnsAdapter()
        }

        return LocalDateAdapterSingleton.instance
    }
}