import { Session } from "#/domain/Session"
import { signInWithPopup } from "firebase/auth"
import { ISessionRepository } from "./index.gateways"
import { firebaseApp } from "#/infra/adapters/FirebaseAdapter"
import { ICryptorAdapter } from "#/infra/adapters/CryptorAdapter/index.gateway"
import { SessionModel } from "#/infra/repositories/session-repository/index.models"
import { SessionMapper } from "#/infra/repositories/session-repository/mappers/session-mapper"

export const LOCAL_STORAGE_SESSION_KEY = "@FINANCE_APP_SESSION"

export class SessionRepository implements ISessionRepository {
    constructor(
        private readonly storage: Storage,
        private readonly cryptor: ICryptorAdapter,
    ) { }

    async create(): Promise<Session> {
        console.info('[sessão] criando nova sessão...')

        const auth = firebaseApp.getAuthInstance()
        const provider = firebaseApp.getProvider()

        const result = await signInWithPopup(auth, provider)
        return SessionMapper.map({ ...result.user as SessionModel })
    }

    find(): Session | undefined {
        console.info('[sessão] buscando dados da sessão...')

        const stringfiedSession = this.storage.getItem(LOCAL_STORAGE_SESSION_KEY)

        if (stringfiedSession) {
            const userData: SessionModel = JSON.parse(stringfiedSession)
            return SessionMapper.map({ ...userData, uid: this.cryptor.decode(userData.uid) })
        }

        return undefined
    }

    save(user: Session): void {
        console.info('[sessão] salvando sessão...')

        const sessionData: SessionModel = {
            uid: this.cryptor.encode(user.id),
            displayName: user.name,
            email: user.email,
            photoURL: user.picture
        }


        this.storage
            .setItem(
                LOCAL_STORAGE_SESSION_KEY,
                JSON.stringify(sessionData)
            )

    }
}