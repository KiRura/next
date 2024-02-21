import { Menu } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Button } from '@mui/material-next'

export const metadata = {
  twitter: {
    card: 'summary',
    title: 'きるら',
    description: 'きるら(KiRura)ってだ～れだ',
    image: '/kirura.jpg',
    color: '16760703',
  },
}

const Page = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ホーム
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Page
