import expressLoader from './express.loader'
import sequelizeLoader from './sequelize.loader'

export default {
    async init({
        expressApp = null,
        expressRoutes = null,
        sequelizeInstance = null,
    }) {
        await expressLoader(expressApp, expressRoutes)
        await sequelizeLoader(sequelizeInstance)
    },
}
