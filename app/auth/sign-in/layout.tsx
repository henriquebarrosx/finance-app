import { Fragment, PropsWithChildren } from 'react'

export const metadata = {
    title: 'Sign In',
}

function Layout({ children }: PropsWithChildren) {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default Layout