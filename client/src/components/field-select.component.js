import React, { useState, useEffect, useRef } from 'react'

// import util
import { randomKey } from 'utils'

/**
 * Component with select+label reusability
 *
 * @param {String} label
 * @param {String} type
 * @param {String} className
 * @param {Array} options
 * @param {Callback} onChange
 * @param {String} selectedValue
 * @param {String} selectedValueTitle
 * @param {Object} rest
 * */
function FieldSelect({
    label = null,
    type = 'text',
    className = '',
    options = [],
    selectedValue = null,
    selectedValueTitle = null,
    onChange = () => {},
    ...rest
}) {
    const [title, setTitle] = useState('- Selecciones una opción -')
    const [isActive, setIsActive] = useState(false)

    // random id to assing to input field & make reference from label
    const idFieldSelect = randomKey()
    const fieldSelectRef = useRef(null)

    // capture click to option item, then, update title select and dispatch onChange function
    const handleClickOptionItem = e => {
        e.stopPropagation()
        const value = e.target.getAttribute('option')

        setTitle(e.target.innerText)
        onChange({ target: { value } })
        setIsActive(false)
    }

    // Detect focus for component to show options list
    const handleFocus = e => {
        setIsActive(true)
    }

    // Detect blur for component to hide option list
    const handleBlur = e => {
        if (!fieldSelectRef.current.contains(e.target)) {
            setIsActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleBlur)

        // If props of selected item is passed, replace deafult component value to selected item
        if (selectedValue !== null || selectedValueTitle !== null) {
            options.forEach(option => {
                if (
                    option.value === selectedValue ||
                    option.title === selectedValueTitle
                ) {
                    setTitle(option.title)
                }
            })
        }

        return () => {
            window.removeEventListener('click', handleBlur)
        }
    }, [selectedValue, selectedValueTitle, options])

    return (
        <fieldset
            ref={fieldSelectRef}
            className={`FieldSelect ${isActive ? 'active' : ''} ` + className}
        >
            {
                // if label property is passed, render the label
                label ? (
                    <label
                        htmlFor={idFieldSelect}
                        className='FieldSelect-label'
                    >
                        {label}
                    </label>
                ) : null
            }

            {/* ...rest assing other props passed into component invoke */}
            <input
                id={idFieldSelect}
                type='text'
                value={title}
                onChange={_ => title}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className='FieldSelect-title'
                {...rest}
            />

            {/* Render the option list */}
            <div className='FieldSelect-options'>
                {options.map(option => (
                    <p
                        key={randomKey()}
                        option={option.value}
                        onClick={handleClickOptionItem}
                        className='FieldSelect-options-item'
                    >
                        {option.title}
                    </p>
                ))}
            </div>
        </fieldset>
    )
}

export default React.memo(FieldSelect)
