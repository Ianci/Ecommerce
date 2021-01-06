import { BASE_PATH } from '../utils/constants'

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