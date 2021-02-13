import GlobalStyle from './styles'
import { ThemeProvider } from 'styled-components'
// Component é o componente de cada página

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
