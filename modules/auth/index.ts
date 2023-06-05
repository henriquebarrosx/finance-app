import { createElement } from 'react'
import { firebaseApp } from '#/infra/adapters/FirebaseAdapter'

export function withNoAuth(Component: () => JSX.Element) {
    firebaseApp
        .getAuthInstance()
        .onAuthStateChanged(
            (session) => {
                console.info('[sessão] validando sessão...')

                if (session) {
                    window.location.replace('/')
                }
            }
        )

    return () => createElement(Component)
}

export function withAuth(Component: () => JSX.Element) {
    firebaseApp
        .getAuthInstance()
        .onAuthStateChanged(
            (session) => {
                console.info('[sessão] validando sessão...')

                if (!session) {
                    window.location.replace('/auth/sign-in')
                }
            }
        )

    return () => createElement(Component)
}
