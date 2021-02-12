import { useState } from 'react'

/**
 * Custom hook for control loader visualization
 * @param {React.Component} loaderComponent - component to render
 * @return {Array}
 */
export default function useLoader(loaderComponent = null) {
    // Store loader status
    const [showLoader, setShowLoader] = useState(false)

    const _onShowLoader = _ => {
        setShowLoader(true)
    }

    const _onHideLoader = _ => {
        setShowLoader(false)
    }

    // Change loader status to true for show
    const _showLoader = _ => {
        window.dispatchEvent(new CustomEvent('_showLoader'))
    }

    // Change loader status to false
    const _hideLoader = _ => {
        window.dispatchEvent(new CustomEvent('_hideLoader'))
    }

    // Return loader component rendered
    const render = _ => {
        return showLoader ? loaderComponent : null
    }

    // Configure window listener for show loader
    const enableLoader = _ => {
        window.addEventListener('_showLoader', _onShowLoader)
        window.addEventListener('_hideLoader', _onHideLoader)
    }

    // Remove prev windows listener
    const disableLoader = _ => {
        window.removeEventListener('_showLoader', _onShowLoader)
        window.removeEventListener('_hideLoader', _onHideLoader)
    }

    return [
        {
            isShowing: showLoader,
            show: _showLoader,
            hide: _hideLoader,
            render,
        },
        enableLoader,
        disableLoader,
    ]
}
