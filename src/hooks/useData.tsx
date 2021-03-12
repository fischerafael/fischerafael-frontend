import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import { LanguageContext } from '../contexts/LanguageContext'

const useData = () => {
    const { language } = useContext(LanguageContext)
    const { portuguese, english } = useContext(DataContext)

    const data = language === 'portuguese' ? portuguese : english

    return {
        data
    }
}

export default useData
