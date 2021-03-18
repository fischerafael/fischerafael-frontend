import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

const useLanguage = () => {
    const { language, handleSetEnglish, handleSetPortuguese } = useContext(
        LanguageContext
    )

    return { language, handleSetEnglish, handleSetPortuguese }
}

export default useLanguage
