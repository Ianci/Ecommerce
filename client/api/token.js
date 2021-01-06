import { TOKEN } from '../utils/constants'
export const saveToken = (token) => {
    localStorage.setItem( TOKEN , token)
}

export const getToken = () => {
    return localStorage.getItem(TOKEN)
}