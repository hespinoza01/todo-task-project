import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')
const element = document.createElement('div')

element.className = 'Modal'

export default function Modal({ children }) {
    useEffect(_ => {
        window.document.body.style.overflowY = 'hidden'
        modalRoot.appendChild(element)

        return _ => {
            window.document.body.style.overflowY = ''
            modalRoot.removeChild(element)
        }
    }, [])

    return createPortal(children, element)
}
