import styled from 'styled-components'

export const DefaultPageContainer = styled.section`
    background: ${(props) => props.theme.color.darker};
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
