import React from 'react'
import '../styles/globals.css'
import '../styles/schedule.css'
import initAuth from '../utils/initAuth'
import Layout from '../components/Layout'

initAuth()

const App = ({ Component, pageProps }: any) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App;
