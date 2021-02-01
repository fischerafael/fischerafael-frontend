import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            dark: string
            ligth: string
            primary: string
            secondary: string
        }
        textSizes: {
            text: string
            subtitle: string
            title: string
            heading: string
        }
        button: {
            height: string
        }
    }
}