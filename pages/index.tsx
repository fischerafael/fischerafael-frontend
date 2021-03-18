import React, { useContext } from 'react'

import { ProfileContext } from '../src/contexts/ProfileContext'

import Header from '../src/external/ui/components/organisms/Header'
import Profile from '../src/external/ui/components/organisms/Profile'

import Navigation from '../src/external/ui/components/organisms/Navigation'
import About from '../src/external/ui/components/organisms/About'

const home = () => {
    const { isOpen } = useContext(ProfileContext)

    return (
        <>
            <Header />
            {isOpen && <Profile />}
            <Navigation currentPage="about" />
            <About />
        </>
    )
}

export default home
