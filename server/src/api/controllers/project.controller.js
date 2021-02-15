import { ProjectService } from '@/services'
import { ProjectValidation } from '@/validators'

/**
 * POST: {{SERVER_ADDRESS}}/project
 * params: PojectValidationSchema
 * Create a new project
 */
export async function createProjectController(req, res) {
    try {
        // extract user id
        const { id: UserID } = req.user

        // validate project data
        const data = await ProjectValidation(req.body)

        // invoke project service
        const response = await ProjectService.createProject(UserID, data)

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}

/**
 * GET: {{SERVER_ADDRESS}}/project
 * Get all project from user
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export async function getProjectsFromUserController(req, res) {
    try {
        // extarct user id
        const { id: UserId } = req.user

        const response = await ProjectService.getProjectsFromUser(UserId)

        res.send(response)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}

/**
 * GET: {{SERVER_ADDRESS}}/project/:projectId
 * Get project detail by id
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export async function getProjectByIdController(req, res) {
    try {
        // extract user id
        const { id: UserId } = req.user

        // extact project id
        const { projectId } = req.params

        const project = await ProjectService.getProjectById(projectId)

        // check if user is owner of project
        if (project.UserId !== UserId) {
            throw String('No se encontró el proyecto')
        }

        res.send(project)
    } catch (message) {
        res.status(400).send({
            error: true,
            message,
        })
    }
}

/**
 * PUT: {{SERVER_ADDRESS}}/project/:projectId
 * params: ProjectValidationSchema
 * Update a exist project
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export async function updateProjectController(req, res) {
    try {
        // extract user id
        const { id: UserId } = req.user

        // extract project id
        const { projectId } = req.params

        // validate input data
        const data = await ProjectValidation(req.body)

        const resutl = await ProjectService.updateProject(projectId, {
            ...data,
            UserId,
        })

        res.send(resutl)
    } catch (message) {
        console.log(message)
        res.status(400).send({
            error: true,
            message,
        })
    }
}
