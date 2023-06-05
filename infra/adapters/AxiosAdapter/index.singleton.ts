import { HttpRequest } from "./index.adapter"
import { IHttpRequest } from "./index.gateway"

export class HttpRequestSingleton {
    private static instance: IHttpRequest

    private constructor() { }

    static getInstance(): HttpRequest {
        if (!HttpRequestSingleton.instance) {
            HttpRequestSingleton.instance = new HttpRequest()
        }

        return HttpRequestSingleton.instance
    }
}