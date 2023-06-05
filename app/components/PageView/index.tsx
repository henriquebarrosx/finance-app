import React from 'react'
import { Navbar } from '#/app/components/Navbar'

interface Props {
    children: React.ReactNode
}

export function PageView({ children }: Props) {
    return (
        <div className='relative flex flex-col h-screen w-screen bg-slate-100'>
            <Navbar />

            <div className='max-w-[1440px] w-full h-full bg-slate-100 mx-auto'>
                {children}
            </div>
        </div>
    )
}