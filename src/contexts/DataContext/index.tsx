import data from '../../../data/data.json'
import { IDataProps } from '../../../data/interface'

import { createContext } from 'react'

export const DataContext = createContext({} as IDataProps)

export const DataProvider = ({ children }) => {
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
