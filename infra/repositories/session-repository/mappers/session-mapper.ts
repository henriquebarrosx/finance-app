import { Session } from '#/domain/Session'
import { SessionModel } from '../index.models'

export class SessionMapper {
    private constructor() { }

    static map(userData: Omit<SessionModel, 'expireIn'>) {
        return new Session(
            userData.uid,
            userData.displayName,
            userData.email,
            userData.photoURL,
        )
    }
}