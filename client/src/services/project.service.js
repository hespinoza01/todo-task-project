import { Http, ErrorAlert, SuccessAlert } from 'utils'

const ProjectService = {}

/**
 * Create a new project
 * @param {String} name
 * @param {String} description
 */
ProjectService.createProject = function ({ name, description, archived = 0 }) {
    return new Promise(async (resolve, _) => {
        try {
            const dataSend = { name, description, archived }

            const { data } = await Http.post('/project', dataSend)

            // check response error
            if (data.error) {
                throw String(data.message)
            }

            SuccessAlert('Proyecto creado con éxito')
            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)
            resolve({})
        }
    })
}

/**
 * Update project
 * @param {Object} dataSend
 */
ProjectService.updateProject = function (dataSend) {
    return new Promise(async (resolve, _) => {
        try {
            const { data } = Http.put(`/project/${dataSend.id}`, dataSend)

            // check for errors
            if (data.error) {
                throw String(data.message)
            }

            SuccessAlert('Proyecto modificado con éxito')
            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)
            resolve({})
        }
    })
}

/**
 * Get project details
 */
ProjectService.getProject = function (projectId) {
    return new Promise(async (resolve, _) => {
        try {
            const { data } = Http.get(`/project/${projectId}`)

            // check for errors
            if (data.error) {
                throw String(data.message)
            }

            resolve(data)
        } catch (error) {
            console.error(error)
            ErrorAlert(error)
            resolve({})
        }
    })
}

/**
 * Get all projects fro user
 */
ProjectService.getProjectList = function () {
    return new Promise(async (resolve, _) => {
        try {
            const { data } = await Http.get('/project')

            // check for errors
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

export default ProjectService
