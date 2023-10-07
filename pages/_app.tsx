import React from 'react'
import '../styles/globals.css'
import initAuth from '../utils/initAuth'
import AppBar from '../components/AppBar'

initAuth()

const MyApp = ({ Component, pageProps }: any) => (
  <>
  <AppBar />
  <Component {...pageProps} />
  </>
)

export default MyApp
