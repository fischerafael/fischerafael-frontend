import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${(props) => props.theme.color.darker};
`

export const MediumFlexContainer = styled(FlexContainer)`
    max-width: ${(props) => props.theme.breakPoints.md};
`
