import { BASE_PATH } from '../utils/constants'
import { authFetch } from '../utils/fetch'
export async function registerFunction(values){
    try {
        const url = `${BASE_PATH}/auth/local/register`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        };
        const response = await fetch(url, params)
        const result = response.json();
        console.log(result)
        return result
    } catch (error) {
        console.log(error.message)
        
    }
}

export async function getMeApi(logout){
    try {
        const url = `${BASE_PATH}/users/me`;
        const result = await authFetch(url, null, logout)
        return result ? result : null;  
    } catch (error) {
        return null
    }
}

