'use client'

import { withAuth } from '#/modules/auth/private'
import { PageView } from '#/app/components/PageView'

function HomePage() {
    return (
        <PageView>

        </PageView>
    )
}

export default withAuth(HomePage)