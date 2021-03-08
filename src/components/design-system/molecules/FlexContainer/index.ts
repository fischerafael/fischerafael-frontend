import styled from 'styled-components'

interface StyleProps {
    align?: 'flex-start' | 'flex-end'
    justify?: 'flex-start' | 'flex-end' | 'space-between'
    direction?: 'column'
    background: 'transparent' | 'light' | 'dark' | 'darker'
    as: 'div' | 'main' | 'header' | 'nav' | 'section'
    [x: string]: any
}

export const FlexContainer = styled.div<StyleProps>`
    display: flex;

    flex-direction: row;
    flex-direction: ${(props) => props.direction};

    align-items: center;
    align-items: ${(props) => props.align};

    justify-content: center;
    justify-content: ${(props) => props.justify};

    height: 100%;
    width: 100%;

    background: ${(props) =>
        props.background === 'transparent' && props.theme.color.transparent};
    background: ${(props) =>
        props.background === 'light' && props.theme.color.light};
    background: ${(props) =>
        props.background === 'dark' && props.theme.color.dark};
    background: ${(props) =>
        props.background === 'darker' && props.theme.color.darker};
`
