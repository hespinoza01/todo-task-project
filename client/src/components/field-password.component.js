import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

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
function FieldPassword({ label = null, className = '', ...rest }) {
    const [showPassword, setShowPassword] = useState(false)

    // random id to assing to input field & make reference from label
    const idFieldPassword = randomKey()

    return (
        <fieldset className={'FieldPassword ' + className}>
            {
                // if label property is passed, render the label
                label ? (
                    <label
                        htmlFor={idFieldPassword}
                        className='FieldPassword-label'
                    >
                        {label}
                    </label>
                ) : null
            }

            {/* ...rest assing other props passed into component invoke */}
            <div className='FieldPassword-input'>
                <input
                    id={idFieldPassword}
                    type={showPassword ? 'text' : 'password'}
                    {...rest}
                />
                <i onClick={_ => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </i>
            </div>
        </fieldset>
    )
}

export default React.memo(FieldPassword)
