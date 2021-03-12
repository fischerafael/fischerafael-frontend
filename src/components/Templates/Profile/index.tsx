import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ProfileContext } from '../../../contexts/ProfileContext'

import CustomLink from '../../design-system/molecules/CustomLink'

import Header from '../../Header'
import Main from '../../Main'
import NavSection from '../../NavSection'

import { FaPlus, FaMinus } from 'react-icons/fa'
import { LanguageContext } from '../../../contexts/LanguageContext'

import { DataContext } from '../../../contexts/DataContext'

interface Props {
    page: 'contact' | 'projects' | 'about'
}

const ProfileSection = ({ page }: Props) => {
    const { isOpen, handleCloseProfile, handleOpenProfile } = useContext(
        ProfileContext
    )
    const { language, handleSetEnglish, handleSetPortuguese } = useContext(
        LanguageContext
    )
    const { portuguese } = useContext(DataContext)

    return (
        <>
            <Header>
                {!isOpen && <FaPlus onClick={handleOpenProfile} />}
                {isOpen && <FaMinus onClick={handleCloseProfile} />}

                {language === 'english' && (
                    <NavLink onClick={handleSetPortuguese}>PT</NavLink>
                )}
                {language === 'portuguese' && (
                    <NavLink onClick={handleSetEnglish}>EN</NavLink>
                )}
            </Header>

            {isOpen && (
                <Main
                    name={portuguese.personal.name}
                    title={portuguese.personal.bio}
                />
            )}

            <NavSection>
                <CustomLink href="/">
                    <NavLink isActive={page === 'about' && true}>
                        {language === 'portuguese' && 'Sobre'}
                        {language === 'english' && 'About'}
                    </NavLink>
                </CustomLink>

                <CustomLink href="/projects">
                    <NavLink isActive={page === 'projects' && true}>
                        {language === 'portuguese' && 'Projetos'}
                        {language === 'english' && 'Work'}
                    </NavLink>
                </CustomLink>
                <CustomLink href="/contact">
                    <NavLink isActive={page === 'contact' && true}>
                        {language === 'portuguese' && 'Contato'}
                        {language === 'english' && 'Contact'}
                    </NavLink>
                </CustomLink>
            </NavSection>
        </>
    )
}

export default ProfileSection

interface NavLinkProps {
    isActive?: boolean
}
const NavLink = styled.li<NavLinkProps>`
    text-align: center;
    font-weight: normal;
    padding: 2rem 0;
    cursor: pointer;

    color: ${(props) => props.theme.color.ligth};

    transition: 1s;

    &:hover {
        color: ${(props) => props.theme.color.dark};
    }

    ${(props) =>
        props.isActive &&
        css`
            font-weight: bold;
            border-bottom: solid 0.1rem ${(props) => props.theme.color.light};
        `}
`
