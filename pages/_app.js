import '../styles/globals.css'
import Header from './components/Header'
import Container from '@mui/material/Container'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
