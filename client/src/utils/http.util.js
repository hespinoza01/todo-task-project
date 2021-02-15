import axios from 'axios'
import Swal from 'sweetalert2'
import { BASE_URL_SERVER } from 'utils'
import { getAuth, removeAuth } from 'services'

/**
 * Hook for make REST petitions
 * @param {String} pathUrl
 * @param {Option} options
 * @returns {Array} [Axios, CancelPetition]
 */
const Http = axios.create({
    // api base url
    baseURL: BASE_URL_SERVER,
})

/**
 * Add access toke before execute petition
 */
Http.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        ...getAuth(),
    }

    return config
})

Http.interceptors.response.use(async response => {
    if (response.status === 401) {
        await Swal.fire('Ha ocurrido un error', response.data.message, 'error')

        removeAuth()
        window.location.href = '/'
    }

    return response
})

export default Http
