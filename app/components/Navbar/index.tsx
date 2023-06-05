'use client'

import { FaCoins } from 'react-icons/fa'
import { AvatarSide } from '#/app/components/AvatarSide'
import { sessionRepository } from '#/infra/repositories'
import { ProfileCard } from '#/app/components/ProfileCard'
import { useProfileCardViewModel } from '#/app/components/ProfileCard/index.vm'

export function Navbar() {
    const profileCardViewModel = useProfileCardViewModel()
    const session = sessionRepository.find()

    return (
        <div className='fixed w-screen h-16 p-8 bg-white'>
            <div className='relative max-w-[1440px] w-full h-full flex justify-between items-center mx-auto'>
                <div className='flex gap-1'>
                    <FaCoins color='rgb(251 191 36)' size={32} />
                </div>

                <AvatarSide
                    picture={session?.picture!}
                    onClick={() => profileCardViewModel.toggleProfileCard()}
                />

                {profileCardViewModel.isVisible && <ProfileCard />}
            </div>
        </div>
    )
}