import React from 'react'
import styled from 'styled-components'

const GridThree = ({ children, ...props }) => {
    return <GridThreeStyle {...props}>{children}</GridThreeStyle>
}

export default GridThree

const GridThreeStyle = styled.div`
    z-index: 10;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    align-items: center;

    width: 100%;
    gap: 2rem;
    padding: 2rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`
