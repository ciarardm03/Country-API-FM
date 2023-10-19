import {useLocalStorage} from '@uidotdev/usehooks'
import React from 'react'
import {ThemeProviderContextState, ThemeProviderProps, ThemeType} from '@/types'

const ThemeProviderContext = React.createContext<ThemeProviderContextState>({theme: 'system'} as ThemeProviderContextState)


export default function ThemeProvider({children}: ThemeProviderProps) {
    const [theme, setTheme] = useLocalStorage('theme', 'system' as ThemeType)

    React.useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove('light', 'dark')

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    return (
        <ThemeProviderContext.Provider value={{
            theme,
            setTheme,
        }}>
            {children}
        </ThemeProviderContext.Provider>
    )
}


export const useTheme = () => {
    const context = React.useContext(ThemeProviderContext)

    if (context === undefined) throw new Error('useTheme must be used within a Theme Provider')

    return context
}
