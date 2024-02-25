import { Box, Typography } from '@mui/material'

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
      <Box textAlign={'center'}>
        <Typography variant="h1" align="center">
          Hi!
        </Typography>
        <Typography>Twitter</Typography>
      </Box>
    </>
  )
}

export default Page
