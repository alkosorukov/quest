import 'whatwg-fetch'
import 'promise-polyfill/src/polyfill'

export default class authApi {
    static async authUser(data) {
        try {
            const response = await fetch('/backend/user/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                credentials: 'same-origin',
                body: JSON.stringify(data)
            })
            return await response.json()
        } catch (error) {
            throw new Error('Не удалось провести авторизацию')
        }
    }

    static async authUserFromToken(token) {
        try {
            const response = await fetch('/backend/user', {
                headers: {'Content-Type': 'application/json','Authorization': `Bearer ${token}`},
                credentials: 'same-origin'
            })
            return await response.json()
        } catch (error) {
            throw new Error('Не удалось провести авторизацию')
        }
    }
}