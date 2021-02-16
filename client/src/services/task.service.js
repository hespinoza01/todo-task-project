import { Http, ErrorAlert, SuccessAlert } from 'utils'

const TaskService = {}

/**
 * Create a new task
 * @param {Number} projectId
 * @param {Object} dataSend
 */
TaskService.createTask = function (projectId, dataSend) {
    return new Promise(async (resolve, _) => {
        try {
            const { data } = await Http.post(
                `/project/${projectId}/task`,
                dataSend
            )

            // check for errors
            if (data.error) {
                throw String(data.message)
            }

            SuccessAlert('Tarea creada con éxito')
            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)
            resolve({})
        }
    })
}

/**
 * Update a task
 * @param {Number} projectId
 * @param {String} dataSend
 */
TaskService.updateTask = function (projectId, dataSend) {
    return new Promise(async (resolve, _) => {
        try {
            const { id } = dataSend

            const { data } = await Http.put(
                `/project/${projectId}/task/${id}`,
                dataSend
            )

            if (data.error) {
                throw String(data.message)
            }

            SuccessAlert('Tarea modificada con éxito')
            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)
            resolve({})
        }
    })
}

/**
 * Get all task from project
 * @param {Number} projectId
 */
TaskService.getTaskFromProject = function (projectId) {
    return new Promise(async (resolve, _) => {
        try {
            const { data } = await Http.get(`/project/${projectId}/task`)

            if (data.error) {
                throw String(data.message)
            }

            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)
            resolve([])
        }
    })
}

export default TaskService
