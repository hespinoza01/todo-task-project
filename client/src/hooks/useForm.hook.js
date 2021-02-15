import { useState } from 'react'
import { randomKey } from 'utils'

function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * Custom hook for manipulating form data
 * @param {Object} initialValue
 */
export default function useForm(initialValue = {}) {
    if (!isObject(initialValue)) {
        throw String('useform: invalid initial data')
    }

    const [data, setData] = useState(initialValue)
    const formName = randomKey()

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

    const setNewdata = newData => {
        if (!isObject(newData)) {
            throw String('useform: invalid set data')
        }

        // search current form into document
        const form = document.forms[formName]

        if (!form) {
            throw String('useForm: error on set data, form not found')
        }

        for (let item of Object.entries(newData)) {
            // extarct entrie for newdata item
            const [key, value] = item

            // if field exist into form, set new input value
            if (form[key]) {
                form[key].value = value
            }
        }

        setData(newData)
    }

    const resetData = _ => setData(initialValue)

    return [
        {
            name: formName,
            value: data,
            onChange,
        },
        setNewdata,
        resetData,
    ]
}
