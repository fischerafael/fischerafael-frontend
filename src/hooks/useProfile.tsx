import { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'

const useProfile = () => {
    const { isOpen, handleCloseProfile, handleOpenProfile } = useContext(
        ProfileContext
    )

    return { isOpen, handleCloseProfile, handleOpenProfile }
}

export default useProfile
