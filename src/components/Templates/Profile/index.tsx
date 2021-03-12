import React from 'react'
import styled, { css } from 'styled-components'
import CustomLink from '../../design-system/molecules/CustomLink'
import Header from '../../Header'
import Main from '../../Main'
import NavSection from '../../NavSection'

interface Props {
    page: 'blog' | 'projects' | 'about'
    isOpen: boolean
    onClose: (e: any) => void
    onOpen: (e: any) => void
}

const ProfileSection = ({ page, isOpen, onClose, onOpen }: Props) => {
    return (
        <>
            <Header>
                {!isOpen && <NavLink onClick={onOpen}>Abrir</NavLink>}
                {isOpen && <NavLink onClick={onClose}>Fechar</NavLink>}

                <NavLink>EN</NavLink>
            </Header>

            <Main
                isOpen={isOpen}
                name="Rafael Fischer"
                title="Desenvolvedor Frontend & UI / UX Designer"
            />

            <NavSection>
                <CustomLink href="/">
                    <NavLink isActive={page === 'about' && true}>Sobre</NavLink>
                </CustomLink>

                <CustomLink href="/projects">
                    <NavLink isActive={page === 'projects' && true}>
                        Projetos
                    </NavLink>
                </CustomLink>
                <CustomLink href="/blog">
                    <NavLink isActive={page === 'blog' && true}>Blog</NavLink>
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
            border-bottom: solid 0.2rem ${(props) => props.theme.color.light};
        `}
`
