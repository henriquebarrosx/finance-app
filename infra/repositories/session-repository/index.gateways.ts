import { Session } from '#/domain/Session'

export interface ISessionRepository {
    create(): Promise<Session>
    find(): Session | undefined
    save(session: Session): void
}