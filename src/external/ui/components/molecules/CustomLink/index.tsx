import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    url: string
    newTab?: boolean
}

const CustomLink = ({ children, url, newTab }: Props) => {
    return (
        <Link href={url}>
            <a target={newTab && '_blank'}>{children}</a>
        </Link>
    )
}

export default CustomLink
