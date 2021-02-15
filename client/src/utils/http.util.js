import axios from 'axios'
import { BASE_URL_SERVER } from 'utils'
import { getAuthToken, removeAuth } from 'services'

/**
 * Hook for make REST petitions
 * @param {String} pathUrl
 * @param {Option} options
 * @returns {Array} [Axios, CancelPetition]
 */
const Http = axios.create({
    // api base url
    baseURL: BASE_URL_SERVER,
    validateStatus: status => {
        if (status === 401) {
            removeAuth()
            return true
        }

        if (status === 404) {
            //window.location.href = '/404'
        }

        return status >= 200 && status < 300
    },
})

/**
 * Add access toke before execute petition
 */
Http.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        Autorization: getAuthToken(),
    }

    return config
})

export default Http
