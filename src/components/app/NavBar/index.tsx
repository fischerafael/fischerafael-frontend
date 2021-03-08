import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../design-system/molecules/FlexContainer'

const NavBar = () => {
    return (
        <NavBarFlex as="div" background="transparent">
            <img src="/fischer-header.svg" alt="header" />
        </NavBarFlex>
    )
}

export default NavBar

const NavBarFlex = styled(FlexContainer)`
    position: absolute;
    top: 0;
    z-index: 10;
`
