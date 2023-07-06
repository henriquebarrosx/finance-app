import { ICookies } from './index.gateway'

export class CookiesAdapter implements ICookies {
    save(key: string, data: unknown): void {
        const encodeURIComponent = JSON.stringify(data)
        document.cookie = `${key}=${encodeURIComponent};`
    }

    get<T>(key: string): T | null {
        const cookies = document.cookie.split(';')

        const expectedCookie = cookies.find((cookie) => {
            const COOKIE_KEY = `${key}=`
            return cookie.includes(COOKIE_KEY)
        })

        if (expectedCookie) {
            const extractedData = expectedCookie.split('=')[1]
            return JSON.parse(extractedData)
        }

        return null
    }

    remove(key: string): void {
        const cookies = document.cookie.split(';')
        const cookiesWithoutRemovedKey = cookies.filter((stringfiedCookie) => !stringfiedCookie.startsWith(key))
        const concatedCookies = cookiesWithoutRemovedKey.join(';')
        document.cookie = concatedCookies
    }
}