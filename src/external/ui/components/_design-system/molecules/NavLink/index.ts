import styled, { css } from 'styled-components'

interface NavLinkProps {
    isActive?: boolean
}

export const NavLink = styled.li<NavLinkProps>`
    text-align: center;
    font-weight: normal;
    padding: 2rem 0;
    cursor: pointer;

    color: ${(props) => props.theme.color.ligth};

    transition: 1s;

    &:hover {
        color: ${(props) => props.theme.color.dark};
    }

    ${(props) =>
        props.isActive &&
        css`
            font-weight: bold;

            border-bottom: solid 0.1rem ${(props) => props.theme.color.light};
        `}
`
