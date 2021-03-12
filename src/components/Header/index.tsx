import React from 'react'
import styled from 'styled-components'

const Header = ({ children }) => {
    return (
        <HeaderStyle>
            <section>
                <img src="/fischerafael-icon.svg" alt="FischeRafael" />
                <nav>{children}</nav>
            </section>
        </HeaderStyle>
    )
}

export default Header

const HeaderStyle = styled.header`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15vh;
    background: ${(props) => props.theme.color.darker};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    z-index: 10;

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: ${(props) => props.theme.breakPoints.lg};

        img {
            width: 2rem;
        }

        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style: none;
            gap: 2rem;
            cursor: pointer;
        }
    }
`
