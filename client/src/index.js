import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import context provider
import Provider from 'store'

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
