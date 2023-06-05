'use client'

import { withNoAuth } from '#/modules/auth'
import GoogleButton from '#/app/components/GoogleButton'

function SignInPage() {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <GoogleButton />
        </div>
    )
}

export default withNoAuth(SignInPage)