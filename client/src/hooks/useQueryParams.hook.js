import { useLocation } from 'react-router-dom'

/**
 * Hook para obtener los parámetros de ruta
 */
const useQueryParams = _ => {
    return new URLSearchParams(useLocation().search)
}

export default useQueryParams