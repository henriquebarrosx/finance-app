import { Session } from '#/domain/Session'

export interface ISessionRepository {
    create(): Promise<Session>
    destroy(): Promise<void>
    find(): Session | undefined
    save(session: Session): void
}