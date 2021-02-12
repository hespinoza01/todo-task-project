import { useState } from 'react'

/**
 * Hook for simplify state and onChange for inputs
 * @param {Any} initialValue
 * @return {Array}
 */
export default function useInput(initialValue = null) {
    const [state, setState] = useState(initialValue)

    // Handler for onChange input
    const onChange = ({ target }) => {
        const { value } = target
        setState(value)
    }

    // Restart state value
    const resetState = _ => {
        setState(initialValue)
    }

    return [
        {
            value: state,
            onChange,
        },
        resetState,
    ]
}
