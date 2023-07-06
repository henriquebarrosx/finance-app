'use client'

import { useEffect } from 'react'
import { firebaseApp } from '#/domain/Firebase'
import { withNoAuth } from '#/modules/auth/public'
import GoogleButton from '#/app/_components/GoogleButton'

function SignInPage() {
    // useEffect(() => {
    //     (async () => {
    //         const ab = await firebaseApp.get('/users')
    //         console.log({ ab })
    //     })()
    // }, [])

    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            {/* <GoogleButton /> */}
        </div>
    )
}

export default SignInPage