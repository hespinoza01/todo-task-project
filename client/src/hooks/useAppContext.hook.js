import { useContext } from 'react'
import { Store } from 'store'

/**
 * Hook for extract app context state and reducer
 */
export default function useAppContext() {
    const [state, dispatch] = useContext(Store)

    /**
     * Simplify dispatch invoke
     * @param {String} type
     * @param {Any} payload
     */
    const _dispatch = (type = '', payload = null) => {
        dispatch({ type, payload })
    }

    return [state, _dispatch]
}
