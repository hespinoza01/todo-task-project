import { UserModel } from '@/models'
import { EncodePassword, CreateToken, isObject, ommitKey } from '@/utils'

export default {
    createUser,
    updateUser,
    getUser,
    login,
}

/**
 * Create a new user register
 * @param {Object} userData
 */
function createUser(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!isObject(userData)) {
                throw String('UserService.createUser: Invalid input data')
            }

            // check if exist user register with current email
            const _user = await UserModel.findByEmail(userData.email)

            if (_user) {
                reject('El correo ingresado ya está en uso')
                return
            }

            // create encode password
            const _password = EncodePassword(userData.password)
            // persist user register into db
            const newUser = await UserModel.create({
                ...userData,
                password: _password,
            })

            // get raw data from prev consult and remove sensible data from user
            const result = ommitKey(newUser.get({ plain: true }), 'password')

            resolve(result)
        } catch (error) {
            console.log(error)
            reject('Error al crear usuario')
        }
    })
}

/**
 * Update a existent user register
 * @param {Number} userId - ID from user
 * @param {Object} userData
 */
function updateUser(userId, userData) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!userId || !isObject(userData)) {
                throw String('UserService.updateUser: Invalid input data')
            }

            // Remove id key from userData if exist
            delete userData.id

            // get user register by id
            const _user = await UserModel.findByPk(userId)

            if (!_user) {
                reject('No se encontró el usuario')
                return
            }

            // create encode password
            const _password = EncodePassword(userData.password)
            // persist user register into db
            const updatedUser = await _user.update({
                ...userData,
                password: _password,
            })

            // get raw data from prev consult and remove sensible data from user
            const result = ommitKey(
                updatedUser.get({ plain: true }),
                'password'
            )

            resolve(result)
        } catch (error) {
            console.log(error)
            reject('Error al actualizar usuario')
        }
    })
}

/**
 * Get user info from id
 * @param {Number} userId
 */
function getUser(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!userId) {
                throw String('UserService.getUser: Invalid input data')
            }

            const user = await UserModel.findByPk(userId)

            if (!user) {
                reject('El usuario no existe')
                return
            }

            resolve(ommitKey(user.get({ plain: true }), 'password'))
        } catch (error) {
            console.log(error)
            reject('Error al obtener los datos del usuario')
        }
    })
}

/**
 * check user credentials
 * @param {String} email
 * @param {String} password
 */
function login(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!email || !password) {
                throw String('UserService.login: Invalid input data')
            }

            const user = await UserModel.findByEmail(email)

            if (!user) {
                throw String('Usuario no existe')
            }

            delete user.password
            const token = await CreateToken(user)

            resolve({ ...user, token })
        } catch (error) {
            console.log(error)
            reject('Credenciales incorrectas')
        }
    })
}
