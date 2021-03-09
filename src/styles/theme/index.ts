import { DefaultTheme } from 'styled-components'

export interface PropsTheme {
    color: {
        darker: string
        dark: string
        primary: string
        ligth: string
        ligther: string
    }
    breakPoints: {
        xl: string
        lg: string
        md: string
    }
}

export const theme = {
    color: {
        darker: '#141414',
        dark: '#222222',
        primary: '#35A2D1',
        ligth: '#F3F6F8',
        ligther: '#fff'
    },
    breakPoints: {
        xl: '1024px',
        lg: '900px',
        md: '600px'
    }
}

export const themeOld: DefaultTheme = {
    colors: {
        dark: '#1F212B',
        ultraDark: '#15171E',
        ligth: '#EDEEF1',
        primary: '#2FD7E7',
        secondary: '#DC396A',
        greyBlue: '#448186'
    },
    textSizes: {
        text: '14px',
        subtitle: '18px',
        title: '36px',
        heading: '48px'
    },
    button: {
        height: '64px'
    },
    card: {
        borderRadius: '10px',
        height: '50vh'
    }
}
