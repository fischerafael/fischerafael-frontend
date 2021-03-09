import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

const CustomLink = ({ href, children, ...props }) => {
    return (
        <NextLink href={href} passHref>
            <CustomLinkStyle {...props}>{children}</CustomLinkStyle>
        </NextLink>
    )
}

export default CustomLink

const CustomLinkStyle = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.color.primary};
    transition: 0.5s;

    &:hover {
        color: ${(props) => props.theme.color.secondary};
    }
`
