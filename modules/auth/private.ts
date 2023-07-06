import { createElement } from 'react'
import { firebaseApp } from '#/domain/Firebase'
import { sessionRepository } from '#/infra/repositories'

export function withAuth(Component: () => JSX.Element) {
    firebaseApp
        .getAuthInstance()
        .onAuthStateChanged(
            (session) => {
                console.info('[sessão] validando sessão...')

                if (!session) {
                    sessionRepository.destroy()
                    window.location.replace('/auth/sign-in')
                }
            }
        )

    return () => createElement(Component)
}