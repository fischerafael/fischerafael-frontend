import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global-style'

import { ThemeProvider } from 'styled-components'
import { OptionCardProvider } from '../src/contexts/optionCardContext'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <OptionCardProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </OptionCardProvider>
            </ThemeProvider>
        </>
    )
}
