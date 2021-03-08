import React, { ReactNode } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
    href: string
    children: ReactNode
    [x: string]: any
}

const CustomLink = ({ href, children, ...props }: Props) => {
    return (
        <Link href={href}>
            <CustomAnchor {...props}>{children}</CustomAnchor>
        </Link>
    )
}

export default CustomLink

export const CustomAnchor = styled.a`
    text-decoration: none;
    cursor: pointer;

    transition: 0.5s;

    &:hover {
        color: ${(props) => props.theme.color.primary};
    }
`
