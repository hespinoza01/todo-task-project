import { Router } from 'express'
import {
    createProjectController,
    updateProjectController,
    getProjectByIdController,
    getProjectsFromUserController,
} from '@/api/controllers/project.controller'
import { AuthMiddleware } from '@/api/middlewares'

const router = Router()

// define availables routes
router.use(AuthMiddleware)

router
    .route('/')
    .post(createProjectController)
    .get(getProjectsFromUserController)

router
    .route('/:projectId')
    .get(getProjectByIdController)
    .put(updateProjectController)

export default router
