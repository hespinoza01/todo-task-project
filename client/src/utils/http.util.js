import axios from 'axios'
import { BASE_URL_SERVER } from 'utils'
import { getAuth, removeAuth } from 'services'

/**
 * Hook for make REST petitions
 * @param {String} pathUrl
 * @param {Option} options
 * @returns {Array} [Axios, CancelPetition]
 */
export default function Http() {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    const _axios = axios.create({
        cancelToken: source,
        // api base url
        baseURL: BASE_URL_SERVER,
        headers: {
            ...getAuth(),
        },
        validateStatus: status => {
            if (status === 401) {
                removeAuth()
                return true
            }

            if (status === 404) {
                window.location.href = '/404'
            }

            return status >= 200 && status < 300
        },
    })

    return [
        _axios,
        _ => {
            source.cancel('Petition canceled by user')
        },
    ]
}
