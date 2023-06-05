import { IHttpRequest, IHttpRequestHeaders } from "./index.gateway"

export class HttpRequest implements IHttpRequest {
    async get<Res>(url: string, headers: IHttpRequestHeaders): Promise<Res> {
        const response = await fetch(url, { headers: { ...headers } })
        const userInfo: Res = await response.json()
        return userInfo
    }
}