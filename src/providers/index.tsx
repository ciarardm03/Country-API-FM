import { ChildrenType } from '@/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as process from 'process'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ThemeProvider from '@/components/theme'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

export default function Providers({ children }: ChildrenType) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme={'system'}>
          {children}
        </ThemeProvider>

        {
          process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />
        }
      </QueryClientProvider>
    </BrowserRouter>
  )
}
