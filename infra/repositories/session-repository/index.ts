import { Session } from '#/domain/Session'
import { firebaseApp } from '#/domain/Firebase'
import { ISessionRepository } from './index.gateways'
import { signInWithPopup, signOut } from 'firebase/auth'
import { ICookies } from '#/infra/adapters/CookiesAdapter/index.gateway'
import { ILocalDate } from '#/infra/adapters/LocalDateAdapter/index.gateway'
import { ICryptorAdapter } from '#/infra/adapters/CryptorAdapter/index.gateway'
import { SessionModel } from '#/infra/repositories/session-repository/index.models'
import { SessionMapper } from '#/infra/repositories/session-repository/mappers/session-mapper'

export const MIN_EXPIRE_AMOUNT_DAYS = 1
export const LOCAL_STORAGE_SESSION_KEY = '@FINANCE_APP_SESSION'

export class SessionRepository implements ISessionRepository {
    constructor(
        private readonly localDate: ILocalDate,
        private readonly cookies: ICookies,
        private readonly cryptor: ICryptorAdapter,
    ) { }

    async create(): Promise<Session> {
        console.info('[sessão] criando nova sessão...')

        const auth = firebaseApp.getAuthInstance()
        const provider = firebaseApp.getProvider()

        const result = await signInWithPopup(auth, provider)

        return SessionMapper.map({
            uid: result.user.uid,
            email: result.user.email!,
            photoURL: result.user.photoURL!,
            displayName: result.user.displayName!,
        })
    }

    async destroy(): Promise<void> {
        console.info('[sessão] encerrando sessão...')

        const auth = firebaseApp.getAuthInstance()
        await signOut(auth)
        this.cookies.remove(LOCAL_STORAGE_SESSION_KEY)
    }

    find(): Session | undefined {
        console.info('[sessão] buscando dados da sessão...')
        const userData = this.cookies.get<SessionModel>(LOCAL_STORAGE_SESSION_KEY)
        return !!userData ? SessionMapper.map({ ...userData, uid: this.cryptor.decode(userData.uid) }) : undefined
    }

    save(user: Session): void {
        console.info('[sessão] salvando sessão...')

        const expireInTime = this.localDate
            .addDays(new Date(), MIN_EXPIRE_AMOUNT_DAYS)
            .toISOString()

        const sessionData: SessionModel = {
            uid: this.cryptor.encode(user.id),
            expireIn: expireInTime,
            displayName: user.name,
            email: user.email,
            photoURL: user.picture
        }

        this.cookies.save(LOCAL_STORAGE_SESSION_KEY, sessionData)
    }
}