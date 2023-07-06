import { cryptorAdapter } from '#/infra/adapters/CryptorAdapter'
import { cookieAdapter } from '#/infra/adapters/CookiesAdapter'
import { localDateAdapter } from '#/infra/adapters/LocalDateAdapter'
import { SessionRepository } from '#/infra/repositories/session-repository'

export const sessionRepository = new SessionRepository(localDateAdapter, cookieAdapter, cryptorAdapter)