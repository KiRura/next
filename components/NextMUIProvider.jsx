'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { extendTheme } from '@mui/material-next'
import { CssVarsProvider as ThemeProvider } from '@mui/material-next/styles'
import createCache from '@emotion/cache'

const NextMUIProvider = ({ theme, children }) => {
  const value = createCache({ key: 'css' })
  const darkTheme = extendTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <AppRouterCacheProvider value={value}>
      <ThemeProvider theme={theme || darkTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default NextMUIProvider
