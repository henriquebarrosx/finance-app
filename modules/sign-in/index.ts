import { ISessionRepository } from '#/infra/repositories/session-repository/index.gateways'

export function useAuthViewModel(sessionRepository: ISessionRepository): IAuthViewModel {
    async function signIn(): Promise<void> {
        try {
            const userCredentials = await sessionRepository.create()
            sessionRepository.save(userCredentials)
        }

        catch (error) {
            console.error('[auth] houve um problema ao autenticar', { error })
        }
    }

    async function signOut(): Promise<void> {
        sessionRepository.destroy()
            .catch((error) => {
                console.error('[auth] houve um problema ao autenticar', { error })
            })
    }

    return {
        signIn,
        signOut,
    }
}

interface IAuthViewModel {
    signIn(): Promise<void>
    signOut(): Promise<void>
}