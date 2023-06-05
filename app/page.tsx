'use client'

import { withAuth } from "#/modules/auth"

function HomePage() {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <span>Root page</span>
        </div>
    )
}

export default withAuth(HomePage)