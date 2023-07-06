import React from 'react'

import './index.css'
import { Navbar } from '#/app/_components/Navbar'

interface Props {
    children: React.ReactNode
}

export function PageView({ children }: Props) {
    return (
        <div className='relative flex flex-col h-screen w-screen bg-slate-100 justify-end'>
            <Navbar />

            <div className='max-w-[1440px] w-full h-body bg-slate-100 mx-auto p-8'>
                {children}
            </div>
        </div>
    )
}