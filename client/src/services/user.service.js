/* eslint-disable import/no-anonymous-default-export */
import { Http, ErrorAlert, SuccessAlert } from 'utils'
import { setAuth } from './auth.service'

/**
 * Make login petition to sever
 * @param {String} email
 * @param {String} password
 */
function login(email, password) {
    return new Promise(async (resolve, _) => {
        try {
            const dataSend = { email, password }
            const { data } = await Http.post('/user/acceso', dataSend)

            if (data.error) {
                throw String(data.message)
            }

            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)
            resolve({})
        }
    })
}

/**
 * Create a new user acount
 * @param {String} email
 * @param {String} fullname
 * @param {String} password
 * @param {String} confirmPassword
 */
function register({ email, fullname, password, confirmPassword }) {
    return new Promise(async (resolve, _) => {
        try {
            // check if both password match
            if (!password || !confirmPassword || password !== confirmPassword) {
                throw String('Las contrasela ingresadas no coinciden')
            }

            const dataSend = { email, fullname, password }

            const { data } = await Http.post('/user', dataSend)

            // capture error message from server
            if (data.error) {
                throw String(data.message)
            }

            SuccessAlert('Cuenta creada con éxito')
            resolve(true)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)
            resolve(false)
        }
    })
}

export default { login, register }
