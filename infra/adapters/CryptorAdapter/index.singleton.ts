import { CryptorAdapter } from './index.adapter'

export class CryptorAdapterSingleton {
    private static instance: CryptorAdapter

    private constructor() { }

    static getInstance(): CryptorAdapter {
        if (!CryptorAdapterSingleton.instance) {
            CryptorAdapterSingleton.instance = new CryptorAdapter()
        }

        return CryptorAdapterSingleton.instance
    }
}