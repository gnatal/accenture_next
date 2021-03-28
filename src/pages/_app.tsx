import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle></GlobalStyle>
    </>
  )
}

export default MyApp
