import { IHttpClient, IHttpClientHeaders } from './index.gateway'

export class AxiosAdapter implements IHttpClient {
    async get<Res>(url: string, headers: IHttpClientHeaders): Promise<Res> {
        const response = await fetch(url, { headers: { ...headers } })
        const userInfo: Res = await response.json()
        return userInfo
    }
}