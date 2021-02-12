import Swal from 'sweetalert2'

/**
 * Show a success alert
 * @param {String} message
 */
export const SuccessAlert = message => {
    Swal.fire('Finalizado', message, 'success')
}

/**
 * Show a error alert
 * @param {String} message
 */
export const ErrorAlert = message => {
    Swal.fire('Ha ocurrido un error', message, 'error')
}
