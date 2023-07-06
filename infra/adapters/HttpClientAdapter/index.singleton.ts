import { AxiosAdapter } from './axios.adapter'
import { IHttpClient } from './index.gateway'

export class HttpClientSingleton {
    private static instance: IHttpClient

    private constructor() { }

    static getInstance(): AxiosAdapter {
        if (!HttpClientSingleton.instance) {
            HttpClientSingleton.instance = new AxiosAdapter()
        }

        return HttpClientSingleton.instance
    }
}