import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global-style'

import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { ProfileProvider } from '../src/contexts/ProfileContext'
import { LanguageProvider } from '../src/contexts/LanguageContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Rafael Fischer</title>
                </Head>
                <GlobalStyle />
                <LanguageProvider>
                    <ProfileProvider>
                        <Component {...pageProps} />
                    </ProfileProvider>
                </LanguageProvider>
            </ThemeProvider>
        </>
    )
}
