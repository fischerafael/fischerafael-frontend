import { createContext, useState } from 'react'

type Language = 'portuguese' | 'english' | 'french'

interface Props {
    language: Language
    handleSetPortuguese(): void
    handleSetEnglish(): void
}

export const LanguageContext = createContext({} as Props)

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState<Language>('portuguese')

    function handleSetEnglish() {
        setLanguage('english')
    }

    function handleSetPortuguese() {
        setLanguage('portuguese')
    }

    return (
        <LanguageContext.Provider
            value={{ language, handleSetEnglish, handleSetPortuguese }}
        >
            {children}
        </LanguageContext.Provider>
    )
}
