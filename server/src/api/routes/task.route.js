import { Router } from 'express'
import {
    createTaskController,
    getTaskFromProjectController,
    updateTaskController,
} from '@/api/controllers/task.controller'

const router = Router({ mergeParams: true })

// define availables routes
router.route('/').get(getTaskFromProjectController).post(createTaskController)

router.put('/:taskId', updateTaskController)

export default router
