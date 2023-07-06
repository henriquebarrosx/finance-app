export interface ICookies {
    save(key: string, data: unknown): void
    get<T>(key: string): T | null
    remove(key: string): void
}