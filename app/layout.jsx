import NextMUIProvider from '../components/NextMUIProvider'

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
