import { createCipheriv, randomBytes, createDecipheriv, pbkdf2Sync } from 'crypto'
import { ICryptorAdapter } from './index.gateway'

const ENCODING = 'hex'
const ALGORITHM = 'aes-256-ctr'
const SECRET_KEY = pbkdf2Sync('your-secret-password', 'salt', 100000, 32, 'sha512')

export class CryptorAdapter implements ICryptorAdapter {
    encode(text: string): string {
        const iv = randomBytes(16)
        const cipheriv = createCipheriv(ALGORITHM, SECRET_KEY, iv)
        const encrypted = Buffer.concat([cipheriv.update(text), cipheriv.final()])
        const encoded = Buffer.concat([iv, encrypted])
        return encoded.toString(ENCODING)
    }

    decode(hash: string): string {
        const encoded = Buffer.from(hash, 'hex')
        const iv = encoded.subarray(0, 16)
        const decipher = createDecipheriv(ALGORITHM, SECRET_KEY, iv)
        const encrypted = encoded.subarray(16)
        const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()])
        return decrypted.toString()
    }
}