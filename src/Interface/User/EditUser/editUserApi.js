import 'whatwg-fetch'
import 'promise-polyfill/src/polyfill'

export default class editUserApi {
    static async editUser(data,token) {
        try {
            const response = await fetch('/backend/user/edit', {
                method: 'post',
                headers: {'Content-Type': 'application/json','Authorization': `Bearer ${token}`},
                credentials: 'same-origin',
                body: JSON.stringify(data)
            })
            return await response.json()
        } catch (error) {
            throw new Error('Не удалось провести авторизацию')
        }
    }
}