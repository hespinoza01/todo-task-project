// import constants and functions
import { SuccessAlert, ErrorAlert } from 'utils/alerts.utils'

/**
 * Copy string to clipboard
 * @param {String} str
 * @param {String} message
 */
export default function copyClipboard(
    str = '',
    message = 'Copiado a portapapeles'
) {
    let input = document.createElement('input')

    input.setAttribute('value', str)
    document.body.appendChild(input)
    input.select()

    let result = document.execCommand('copy')
    document.body.removeChild(input)

    if (result) {
        SuccessAlert(message)
    } else {
        ErrorAlert('Error al copiar al portapapeles')
    }
}
