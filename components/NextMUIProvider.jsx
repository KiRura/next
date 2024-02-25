'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import createCache from '@emotion/cache'
import { createTheme, ThemeProvider } from '@mui/material'

const NextMUIProvider = ({ theme, children }) => {
  const value = createCache({ key: 'css' })
  const darkTheme = createTheme({
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
