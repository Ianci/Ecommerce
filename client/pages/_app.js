import React, { useMemo, useEffect, useState } from 'react';
import '../styles/styles.scss'
import 'semantic-ui-css/semantic.min.css'
import { AuthContext } from '../context/authContext'
import jwtDecode from 'jwt-decode'
import { saveToken, getToken} from '../api/token';


export default function MyApp({ Component, pageProps }) {

  const [ auth, setAuth ] = useState(undefined)
  const [ reloadUser, setReloadUser ] = useState(false)
  useEffect(() => {
    //Obtenemos token de localStorage
    const token = getToken()
    //Si hay token, guardamos los datos del usuario
    if(token){
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      })
    } else {
      setAuth(null)
    }
    //Esto lo usamos para forzar al useEffect a que se actualice cada vez que pasamos a true el setReloadUser, es como un interruptor
    setReloadUser(false)
  }, [reloadUser])

  //Login function para usarla dónde querramos ya que va al Provider
  const login = (token) => {
    //Guardamos el token, en el login le pasamos response.jwt
    saveToken(token)
    setAuth({
      token,
      userId: jwtDecode(token).id
    })

  }

  //useMemo
  const authData = useMemo(
    () => ({
      auth,
      login: login,
      logout: () => null,
      setReloadUser,
    }), [auth]
  )

  //Si es undefined (el estado inicial del state) significa que aún no se ha comprobado si hay un user logueado o no
  if(auth === undefined) return null;

  return (
  <AuthContext.Provider value={authData}>
  <Component {...pageProps} />
  </AuthContext.Provider>
  )
}


