'use client'

import { useAuthViewModel } from '#/modules/sign-in'
import { sessionRepository } from '#/infra/repositories'

function GoogleButton() {
    const signInViewModel = useAuthViewModel(sessionRepository)

    return (
        <button onClick={() => signInViewModel.signIn()}>
            Entrar com conta Google
        </button>
    )
}

export default GoogleButton