import React from 'react'
import styled from 'styled-components'

const Main = ({ children }) => {
    return <MainStyle>{children}</MainStyle>
}

export default Main

export const MainStyle = styled.main`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10rem;
    min-height: 100vh;
    background: radial-gradient(
        44.33% 39.07% at 50% 50%,
        #222222 0%,
        #141414 100%
    );
    z-index: 1;
`
