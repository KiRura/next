import NextMUIProvider from '../components/NextMUIProvider'
import './global.css'

const Main = ({ children }) => {
  return (
    <html>
      <head />
      <body>
        <NextMUIProvider>{children}</NextMUIProvider>
      </body>
    </html>
  )
}

export default Main
