import React from 'react'
import styled from 'styled-components'

const NavSection = ({ children }) => {
    return (
        <NavSectionStyle>
            <nav>{children}</nav>
        </NavSectionStyle>
    )
}

export default NavSection

export const NavSectionStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    height: 15vh;
    background: ${(props) => props.theme.color.darker};

    padding: 2rem;
    padding-top: 20vh;
    z-index: 10;

    list-style: none;

    nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        max-width: ${(props) => props.theme.breakPoints.lg};
    }

    li {
        text-align: center;
    }
`
