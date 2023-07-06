// 'use client'

import { FaCoins } from 'react-icons/fa'
import { AvatarSide } from '#/app/_components/AvatarSide'
import { sessionRepository } from '#/infra/repositories'
import { ProfileCard } from '#/app/_components/ProfileCard'
import { useProfileCardViewModel } from '#/app/_components/ProfileCard/index.vm'

export function Navbar() {
    const profileCardViewModel = useProfileCardViewModel()
    const session = sessionRepository.find()

    return (
        <div className='fixed top-0 w-screen h-16 p-8 bg-teal-500'>
            <div className='relative max-w-[1440px] w-full h-full flex justify-between items-center mx-auto'>
                <div className='flex gap-1'>
                    <FaCoins color='#FFFFFF' size={32} />
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