import { cryptor } from "#/infra/adapters/CryptorAdapter"
import { SessionRepository } from "#/infra/repositories/session-repository"

export const sessionRepository = new SessionRepository(localStorage, cryptor)