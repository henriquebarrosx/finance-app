export interface IHttpRequest {
    get<Res>(url: string, headers?: IHttpRequestHeaders): Promise<Res>
}

export interface IHttpRequestHeaders {
    Authorization?: string
}