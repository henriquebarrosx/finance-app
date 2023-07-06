import { createElement } from 'react'
import { firebaseApp } from '#/domain/Firebase'

export async function withNoAuth(Component: () => JSX.Element | Promise<JSX.Element>) {
    // firebaseApp
    //     .getAuthInstance()
    //     .onAuthStateChanged(
    //         (session) => {
    //             console.info('[sessão] validando sessão...')

    //             if (session) {
    //                 window.location.replace('/')
    //             }
    //         }
    //     )

    const ab = await firebaseApp.get('/users')
    console.log({ ab })

    return () => createElement(Component as () => JSX.Element)
}