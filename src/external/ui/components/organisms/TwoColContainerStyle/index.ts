import styled from 'styled-components'

export const TwoColContainerStyle = styled.section`
    max-width: 1200px;
    width: 90%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    align-items: center;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`
