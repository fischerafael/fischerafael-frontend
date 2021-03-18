import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ProfileContext } from '../../../contexts/ProfileContext'

import CustomLink from '../../design-system/molecules/CustomLink'

import NavSection from '../../NavSection'

import { LanguageContext } from '../../../contexts/LanguageContext'

interface Props {
    page: 'contact' | 'projects' | 'about'
}

const ProfileSection = ({ page }: Props) => {
    const { language } = useContext(LanguageContext)

    return (
        <>
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
