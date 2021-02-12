import React from 'react'

// import util
import { randomKey } from 'utils'

/**
 * Component with input+label reusability
 *
 * @param {String} label
 * @param {String} type
 * @param {String} className
 * @param {Object} rest
 * */
function FieldText({ label = null, type = 'text', className = '', ...rest }) {
    // random id to assing to input field & make reference from label
    const idFieldText = randomKey()

    return (
        <fieldset className={'FieldText ' + className}>
            {
                // if label property is passed, render the label
                label ? (
                    <label htmlFor={idFieldText} className='FieldText-label'>
                        {label}
                    </label>
                ) : null
            }

            {/* ...rest assing other props passed into component invoke */}
            <input
                id={idFieldText}
                type={type}
                {...rest}
                className='FieldText-input'
            />
        </fieldset>
    )
}

export default React.memo(FieldText)
