'use client'

import { withAuth } from '#/modules/auth/private'
import { PageView } from '#/app/components/PageView'
import { Transactions } from '#/app/_layers/Transactions'

function HomePage() {
    return (
        <PageView>
            <div className='flex justify-end h-full'>
                <Transactions />
            </div>
        </PageView>
    )
}

export default withAuth(HomePage)