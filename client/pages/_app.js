import React, { useMemo } from 'react';
import '../styles/styles.scss'
import 'semantic-ui-css/semantic.min.css'
import { AuthContext } from '../context/authContext'


export default function MyApp({ Component, pageProps }) {

  const authData = useMemo(
    () => ({
      auth: { name: "ian", email: "email@gmail.com" },
      login: () => null,
      logout: () => null,
      setReloadUser: () => null,
    }), []
  )

  return (
  <AuthContext.Provider value={authData}>
  <Component {...pageProps} />
  </AuthContext.Provider>
  )
}


