import { ProjectModel } from '@/models'
import { isObject, ommitKey } from '@/utils'

export default {
    createProject,
    updateProject,
    getProjectById,
    getProjectsFromUser,
}

/**
 * Create a new project
 * @param {Number} UserId
 * @param {Object} projectData
 */
function createProject(UserId, projectData) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!UserId || !isObject(projectData)) {
                throw String('Invalid input data')
            }

            const newProject = await ProjectModel.create({
                ...projectData,
                UserId,
            })

            resolve(newProject.get({ plain: true }))
        } catch (error) {
            console.log(`ProjectService.createProject: ${error}`)
            reject('Error al crear el proyecto')
        }
    })
}

/**
 * Update a exist project by project id
 * @param {Number} projectId
 * @param {Object} projectData
 */
function updateProject(projectId, projectData) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!projectId || !isObject(projectData)) {
                throw String('Invalid input data')
            }

            // get project from db
            const project = await ProjectModel.findByPk(projectId)

            // if project not exist
            if (!project) {
                reject('No se encontró el proyecto')
                return
            }

            // extact user id
            const { UserId } = projectData

            // check if user is owner from current project
            if (UserId !== project.get('UserId')) {
                reject('No tienes permisos para actualizar este projecto')
            }

            // remove inmutable project data
            projectData = ommitKey(projectData, 'id', 'UserId')

            const updatedProject = await project.update(projectData)

            resolve(updatedProject.get({ plain: true }))
        } catch (error) {
            console.log(`ProjectService.updateProject: ${error}`)
            reject('Error al actualizar el proyecto')
        }
    })
}

/**
 * Get project detail by id
 * @param {Number} projectId
 */
function getProjectById(projectId) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!projectId) {
                throw String('Invalid input data')
            }

            const project = await ProjectModel.findByPk(projectId)

            // if not exist
            if (!project) {
                reject('No se encontró el proyecto')
                return
            }

            resolve(project.get({ plain: true }))
        } catch (error) {
            console.log(`ProjectService.getProject: ${error}`)
            reject('Error al obtener detalle del proyecto')
        }
    })
}

/**
 * Get all projects from a user
 * @param {Number} UserId
 */
function getProjectsFromUser(UserId) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!UserId) {
                throw String('Invalid input data')
            }

            const projects = await ProjectModel.findAll({
                raw: true,
                where: { UserId },
            })

            resolve(projects)
        } catch (error) {
            console.log(error)
            reject('Error al obtener la lista de proyectos')
        }
    })
}
