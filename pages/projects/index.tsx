import React from 'react'

import useProfile from '../../src/hooks/useProfile'

import Header from '../../src/external/ui/components/organisms/Header'
import Navigation from '../../src/external/ui/components/organisms/Navigation'
import Profile from '../../src/external/ui/components/organisms/Profile'
import Projects from '../../src/external/ui/components/organisms/Projects'

const projects = () => {
    const { isOpen } = useProfile()

    return (
        <>
            <Header />
            {isOpen && <Profile />}
            <Navigation currentPage="projects" />
            <Projects />
        </>
    )
}

export default projects
