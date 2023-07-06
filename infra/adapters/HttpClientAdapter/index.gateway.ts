export interface IHttpClient {
    get<Res>(url: string, headers?: IHttpClientHeaders): Promise<Res>
}

export interface IHttpClientHeaders {
    Authorization?: string
}