import GlobalStyle from "../src/style/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
