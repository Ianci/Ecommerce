import { getToken, hasEspiredToken} from '../api/token'

export async function authFetch(url, params, logout){
    const token = getToken()
    if(!token){
        //El user no está logueado
        logout()
    } else {
        //Si retorna true es porque el token expiró
        if(hasEspiredToken(token)){
            logout()
        } else{
            //En el caso de que se haya logueado exitosamente le pasamos un headers customizado con los datos del usuario y su token
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                const response = await fetch(url, paramsTemp)
                const result = await response.json();
                return result;

            } catch (error) {
                console.log(error)
                return error
            }
        }
    }
}