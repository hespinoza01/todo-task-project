import { TaskModel, TaskStateModel } from '@/models'
import { isObject, ommitKey } from '@/utils'

export default {
    createTask,
    updateTask,
    getTaskFromProject,
}

/**
 * Create a new task
 * @param {Number} ProjectId
 * @param {Object} taskData
 */
function createTask(ProjectId, taskData) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!projectId || !isObject(taskData)) {
                throw String('Invalid input data')
            }

            const newTask = await TaskModel.create({
                ...taskData,
                TaskStateId: taskData.status,
                ProjectId,
            })

            resolve(newTask.get({ plain: true }))
        } catch (error) {
            console.log(`TaskService.createTask: ${error}`)
            reject('Error al crear la tarea')
        }
    })
}

/**
 * Update a exist task by id
 * @param {Number} taskId
 * @param {Object} taskData
 */
function updateTask(taskId, taskData) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!taskId || !isObject(taskData)) {
                throw String('Invalid input data')
            }

            // get task from db
            const task = await TaskModel.findByPk(taskId)

            // if task not exist
            if (!task) {
                reject('No se encontró la tarea')
                return
            }

            // extact user id
            const { ProjectId } = taskData

            // check if task is associate to register project
            if (ProjectId !== task.get('ProjectId')) {
                reject('No tienes permisos para actualizar este tarea')
            }

            // remove inmutable project data
            taskData = ommitKey(taskData, 'id', 'ProjectId')

            const updatedTask = await project.update(taskData)

            resolve(updatedTask.get({ plain: true }))
        } catch (error) {
            console.log(`TaskService.updateTask: ${error}`)
            reject('Error al actualizar la tarea')
        }
    })
}

/**
 * Get all task from project
 * @param {Number} ProjectId
 */
function getTaskFromProject(ProjectId) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!ProjectId) {
                throw String('Invalid input data')
            }

            const tasks = await TaskModel.findAll({
                raw: true,
                nest: true,
                where: { ProjectId },
                include: TaskStateModel,
            })

            resolve(tasks)
        } catch (error) {
            console.log(`TaskService.getTaskFromProject: ${error}`)
            reject('Error al obtener la lista de tareas')
        }
    })
}
