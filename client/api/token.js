import { TOKEN } from '../utils/constants'
import jwtDecode from 'jwt-decode'
export const saveToken = (token) => {
    localStorage.setItem( TOKEN , token)
}

export const getToken = () => {
    return localStorage.getItem(TOKEN)
}

export const deleteToken = () => {
    return localStorage.removeItem(TOKEN)
}

export const hasEspiredToken = (token) => {
    const tokenDecode = jwtDecode(token)
    //Exp viene de los parámetros del token, podemos fijarnos en jwt.io
    //Lo multiplicamos x 1000 para pasarlo a segundos 
    const expireDate = tokenDecode.exp * 1000
    const currentDate = new Date().getTime()
    if(currentDate > expireDate){
        //Expiro el token
        return true
    } else {
        return false
    }
}