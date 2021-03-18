import Link from 'next/link'
import React from 'react'
import { NavLink } from '../../_design-system/molecules/NavLink'
import {
    FlexContainer,
    MediumFlexContainer
} from '../../_design-system/templates/FlexContainer'

interface Props {
    currentPage: 'projects' | 'about'
}

const Navigation = ({ currentPage }: Props) => {
    return (
        <FlexContainer as="section">
            <MediumFlexContainer
                as="nav"
                style={{
                    listStyle: 'none',
                    justifyContent: 'space-between',
                    padding: '0 2rem',
                    paddingTop: '15vh'
                }}
            >
                <Link href="/projects">
                    <NavLink
                        isActive={currentPage === 'projects' && true}
                        style={{ width: '100%' }}
                    >
                        <a style={{ textDecoration: 'none' }}>Projetos</a>
                    </NavLink>
                </Link>

                <Link href="/">
                    <NavLink
                        isActive={currentPage === 'about' && true}
                        style={{ width: '100%' }}
                    >
                        <a style={{ textDecoration: 'none' }}>Sobre</a>
                    </NavLink>
                </Link>
            </MediumFlexContainer>
        </FlexContainer>
    )
}

export default Navigation
