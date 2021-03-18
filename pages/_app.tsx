import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global-style'

import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { ProfileProvider } from '../src/contexts/ProfileContext'
import { LanguageProvider } from '../src/contexts/LanguageContext'
import { DataProvider } from '../src/contexts/DataContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Rafael Fischer</title>
                    <link rel="shortcut icon" href="fischerafael-icon.svg" />
                </Head>
                <GlobalStyle />
                <LanguageProvider>
                    <DataProvider>
                        <ProfileProvider>
                            <Component {...pageProps} />
                        </ProfileProvider>
                    </DataProvider>
                </LanguageProvider>
            </ThemeProvider>
        </>
    )
}
