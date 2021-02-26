import { useRef } from 'react'

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

    const form = useRef(null)
    let data = initialValue

    // Handle input onchanges values
    const onChange = e => {
        const { name, value } = e.target

        if (!name) {
            return
        }

        data = {
            ...data,
            [name]: value,
        }
    }

    const setData = newData => {
        if (!isObject(newData)) {
            throw String('useform: invalid set data')
        }

        // search current form into document
        if (!form.current) {
            return
        }

        for (let item of Object.entries(newData)) {
            // extarct entrie for newdata item
            const [key, value] = item

            // if field exist into form, set new input value
            if (form.current[key]) {
                form.current[key].value = value
            }
        }

        data = newData
    }

    const resetData = _ => {
        // search current form into document
        if (!form.current) {
            return
        }

        for (let item of Object.entries(data)) {
            // extarct entrie for newdata item
            const [key] = item

            // if field exist into form, set new input value
            if (initialValue[key]) {
                form.current[key].value = initialValue[key]
            } else {
                form.current[key].value = null
            }
        }

        data = initialValue
    }

    return [
        {
            get ref() {
                setTimeout(_ => setData(initialValue), 100)
                return form
            },
            get value() {
                return data
            },
            onChange,
        },
        setData,
        resetData,
    ]
}
