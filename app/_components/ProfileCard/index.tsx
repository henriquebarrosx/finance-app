// 'use client'

import Image from 'next/image'
import { BiExit } from 'react-icons/bi'
import { useAuthViewModel } from '#/modules/sign-in'
import { sessionRepository } from '#/infra/repositories'

export function ProfileCard() {
    const session = sessionRepository.find()
    const authViewModel = useAuthViewModel(sessionRepository)

    return (
        <div className='absolute right-2 bg-white top-10 shadow-lg rounded-lg px-8 py-4'>
            <div className='flex gap-4 justify-center items-center'>
                <Image
                    width={64}
                    height={64}
                    loading='lazy'
                    alt='Foto do perfil'
                    src={session?.picture!}
                    className='rounded-full w-16 h-16'
                />

                <div className='flex flex-col'>
                    <span className='text-lg text-slate-900 font-semibold'>
                        {session?.name}
                    </span>

                    <span className='text-sm text-slate-400'>
                        {session?.email}
                    </span>
                </div>
            </div>

            <hr className='mt-6 mb-2' />

            <button
                title='Encerrar sessão'
                onClick={() => authViewModel.signOut()}
                className='flex justify-center items-center gap-3 w-full h-12 rounded-lg hover:bg-slate-100'
            >
                <BiExit color='text-slate-800' size={24} />

                <span className='text-sm text-slate-800'>
                    Encerrar sessão
                </span>
            </button>
        </div>
    )
}