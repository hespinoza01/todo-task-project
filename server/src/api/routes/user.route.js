import { Router } from 'express'
import {
    createUserController,
    updateUserController,
    getUserController,
    loginUserController,
} from '@/api/controllers/user.controller'
import { AuthMiddleware } from '@/api/middlewares'

const router = Router()

// define user availables routes
router
    .route('/')
    .post(createUserController)
    .get([AuthMiddleware, getUserController])
    .put([AuthMiddleware, updateUserController])

router.post('/acceso', loginUserController)

export default router
