import { useState } from 'react'

/**
 * Custom hook for manipulating form data
 * @param {Object} initialValue
 */
export default function useForm(initialValue = {}) {
    if (Object.prototype.toString.call(initialValue) !== '[object Object]') {
        throw String('useform: invalid initial data')
    }

    const [data, setData] = useState(initialValue)

    // Handle input onchanges values
    const onChange = e => {
        const { name, value } = e.target

        if (!name) {
            return
        }

        setData({
            ...data,
            [name]: value,
        })
    }

    const resetData = _ => setData(initialValue)

    return [
        {
            value: data,
            onChange,
        },
        resetData,
    ]
}
