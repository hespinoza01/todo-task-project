import express from 'express'
import loaders from '#loaders'
import { vars, db } from '#config'

async function startServer() {
    const app = express()

    await loaders.init({ expressApp: app, sequelizeInstance: db })

    app.listen(vars.PORT, err => {
        if (err) {
            console.log(err)
            return
        }

        console.log(`Server running at port: ${vars.PORT}`)
    })
}

startServer()
