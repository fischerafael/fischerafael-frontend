import { createContext, useState } from 'react'

interface Props {
    isOpen: boolean
    handleOpenProfile: () => void
    handleCloseProfile: () => void
}

export const ProfileContext = createContext({} as Props)

export const ProfileProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    function handleOpenProfile() {
        setIsOpen(true)
    }

    function handleCloseProfile() {
        setIsOpen(false)
    }

    const values = {
        isOpen,
        handleOpenProfile,
        handleCloseProfile
    }

    return (
        <ProfileContext.Provider value={values}>
            {children}
        </ProfileContext.Provider>
    )
}
