import { urlencoded } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

/**
 * Configure a express instance
 * @param {Express} app - Express instance
 * @param {Express.Route} api - Express App Routes
 * @return {Express} app
 */
export default async (app, api) => {
    // If not app, calcel rest execution
    if (!app) {
        console.log('not app')
        return null
    }

    app.enable('trust proxy')

    // config middlewares
    app.use(helmet())
    app.use(cors())
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(urlencoded({ extended: false }))

    // config routes
    app.get('/', (_, res) => res.send('running'))

    if (api) {
        app.use(api)
    }

    return app
}
