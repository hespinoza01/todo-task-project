import React, { Children, useEffect, useState } from 'react'

export default function Button({
    color = '#FECB2E',
    textColor = '#000',
    variant = 'filled',
    children,
    type = 'button',
    onClick = () => {},
    formRef,
}) {
    const [style, setStyle] = useState({
        backgroundColor: color,
        color: textColor,
        border: 'none',
    })

    const styleToUse = () => {
        if (variant === 'filled') {
            setStyle({
                backgroundColor: color,
                color: textColor,
                border: 'none',
            })
        }
        if (variant === 'outline') {
            setStyle({
                backgroundColor: 'transparent',
                color: color,
                border: `1px solid ${color}`,
            })
        }

        if (variant === 'link') {
            setStyle({
                backgroundColor: 'transparent',
                color: color,
                border: `none`,
            })
        }
    }

    useEffect(() => {
        styleToUse()
    }, [variant])

    return (
        <button
            type={type}
            onClick={onClick}
            className='button'
            style={style}
            form={formRef}>
            {children}
        </button>
    )
}
