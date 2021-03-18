import React from 'react'
import useLanguage from '../../../../../hooks/useLanguage'
import useProfile from '../../../../../hooks/useProfile'

import { FaMinus, FaPlus } from 'react-icons/fa'

//import { NavLink } from '../../_design-system/molecules/NavLink'
import {
    FlexContainer,
    MediumFlexContainer
} from '../../_design-system/templates/FlexContainer'

const Header = () => {
    const { isOpen, handleCloseProfile, handleOpenProfile } = useProfile()
    const { language, handleSetEnglish, handleSetPortuguese } = useLanguage()

    return (
        <FlexContainer as="header" style={{ position: 'fixed', zIndex: 10 }}>
            <MediumFlexContainer
                as="section"
                style={{ justifyContent: 'space-between', padding: '0 2rem' }}
            >
                <img
                    style={{ maxWidth: '2rem' }}
                    src="/fischerafael-icon.svg"
                    alt="FischeRafael"
                />
                <FlexContainer
                    as="nav"
                    style={{
                        justifyContent: 'flex-end',
                        listStyle: 'none',
                        gap: '1rem',
                        height: '15vh'
                    }}
                >
                    {!isOpen && <FaPlus onClick={handleOpenProfile} />}
                    {isOpen && <FaMinus onClick={handleCloseProfile} />}
                    {/* {language === 'english' && (
                        <NavLink onClick={handleSetPortuguese}>PT</NavLink>
                    )}
                    {language === 'portuguese' && (
                        <NavLink onClick={handleSetEnglish}>EN</NavLink>
                    )} */}
                </FlexContainer>
            </MediumFlexContainer>
        </FlexContainer>
    )
}

export default Header
