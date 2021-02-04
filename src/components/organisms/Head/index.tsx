import React from 'react'
import Head from 'next/head'

interface ICustomHead {
    pageTitle: string
    ogImage?: string
}

const CustomHead: React.FC<ICustomHead> = ({ pageTitle, ogImage }) => {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="description"
                content="Rafael Fischer é desenvolvedor web, UI e UX Designer"
            />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta
                property="og:image"
                content={ogImage || 'og:image'}
                key="ogimage"
            />
        </Head>
    )
}

export default CustomHead
