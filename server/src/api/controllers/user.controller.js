import { UserService } from '@/services'
import { UserValidation, LoginUserValidation } from '@/validators'

export async function createUserController(req, res) {
    try {
        // Extract request and validate data
        const data = await UserValidation(req.body)

        // invoke create user service
        const response = await UserService.createUser(data)

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}

export async function updateUserController(req, res) {
    try {
        // extract user id
        const { id } = req.user

        // validate user fields
        const data = await UserValidation(req.body)

        const response = await UserService.updateUser(id, data)

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}

export async function getUserController(req, res) {
    try {
        // Extract user id storage for auth middleware
        const { id } = req.user

        // invoke user service
        const response = await UserService.getUser(id)

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}

export async function loginUserController(req, res) {
    try {
        // validate login fields
        const { email, password } = await LoginUserValidation(req.body)

        const response = await UserService.login(email, password)

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}
