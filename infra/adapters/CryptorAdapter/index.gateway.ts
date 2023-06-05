export interface ICryptorAdapter {
    encode(text: string): string
    decode(hash: string): string
}