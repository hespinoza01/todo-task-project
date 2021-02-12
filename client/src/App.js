import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import styles
import 'styles/index.scss'

// import routes
import AppRoutes from './App.routes'

// import components
import { AppLoader } from 'components'

// import hooks
import { useLoader } from 'hooks'

export default function App() {
    // configuring app loader
    const [loader, enableLoader] = useLoader(<AppLoader />)

    // Initial config for app
    const initComponent = _ => {
        enableLoader()
    }

    useEffect(_ => {
        initComponent()
    }, [])

    return (
        <main className='App'>
            <Router>
                <AppRoutes />
            </Router>

            {loader.render()}
        </main>
    )
}
