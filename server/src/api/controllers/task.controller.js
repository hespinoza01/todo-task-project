import { TaskService } from '@/services'
import { TaskValidation } from '@/validators'

/**
 * POST: {{SERVER_ADDRESS}}/project/:projectId/task
 * params: TaskValidationSchema
 * Create a new task
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export async function createTaskController(req, res) {
    try {
        // extract project id
        const { projectId } = req.params

        // validate input data
        const data = await TaskValidation(req.body)

        const response = await TaskService.createTask(projectId, data)

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}

/**
 * GET: {{SERVER_ADDRESS}}/project/:projectId/task
 * Get all task from project
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export async function getTaskFromProjectController(req, res) {
    try {
        // extract project id
        const { projectId } = req.params
        console.log(req.params)
        const response = await TaskService.getTaskFromProject(projectId)

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}

/**
 * PUT: {{SERVER_ADDRESS}}/project/:project/task/:taskId
 * update a current task
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export async function updateTaskController(req, res) {
    try {
        // extract project and task id
        const { projectId: ProjectId, taskId } = req.params

        // validate input data
        const data = await TaskValidation(req.body)

        const response = await TaskService.updateTask(taskId, {
            ...data,
            ProjectId,
        })

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}
