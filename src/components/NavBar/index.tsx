import styled from 'styled-components'

const NavBar = () => {
    return (
        <DesktopNavBarStyle>
            <section>
                <img src={'/fischerafael.svg'} alt="Logo Escrito" />
            </section>
        </DesktopNavBarStyle>
    )
}

export default NavBar

export const DesktopNavBarStyle = styled.nav`
    position: absolute;
    z-index: 100;

    width: 100%;
    height: 15vh;

    display: flex;
    align-items: center;
    justify-content: center;

    section {
        width: 90%;
        max-width: 1024px;
    }
`
