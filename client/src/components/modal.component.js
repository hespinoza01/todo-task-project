import { useEffect } from 'react'

export default function Modal({ children }) {
    useEffect(_ => {
        window.document.body.style.overflowY = 'hidden'

        return _ => {
            window.document.body.style.overflowY = ''
        }
    }, [])

    return <div className='Modal'>{children}</div>
}
