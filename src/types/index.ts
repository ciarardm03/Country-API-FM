import React, {Dispatch, SetStateAction} from 'react'

export type ThemeType = 'dark' | 'light' | 'system'

export type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: ThemeType
}

export type ThemeProviderContextState = {
    theme: ThemeType
    setTheme: Dispatch<SetStateAction<ThemeType>>
}

export type ChildrenType = {
    children: React.ReactNode;
};

export type QueryCountryDataType = {
    name: {
        common: string
    }

    capital: string[]
    population: number
    region: string
    flags: {
        png: string
        alt: string
    }
}

export type CountryDataType = {
    name: string
    capital: string[]
    population: number
    region: string
    flag: {
        src: string
        alt: string
    }
}
