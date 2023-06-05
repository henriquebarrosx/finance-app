import { useState } from 'react'

export function useProfileCardViewModel(): IProfileCardViewModel {
    const [isProfileCardVisible, displayProfileCard] = useState(false)

    function onToggle(): void {
        displayProfileCard((isVisible) => !isVisible)
    }

    return {
        isVisible: isProfileCardVisible,
        toggleProfileCard: onToggle,
    }
}

export interface IProfileCardViewModel {
    isVisible: boolean
    toggleProfileCard(): void
}