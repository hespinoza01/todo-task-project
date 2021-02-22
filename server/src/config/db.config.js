import { Sequelize } from 'sequelize'
import vars from './vars.config'

// Extract db conf
const { DB: dbConfig } = vars

/**
 * Make a sequelize instance
 * @param {String} username - database user
 * @param {String} password - database password
 * @param {String} database - database name
 * @param {String} host - database server host
 * @param {String} dialect - database type
 */
const db = new Sequelize(dbConfig.NAME, dbConfig.USERNAME, dbConfig.PASSWORD, {
    host: dbConfig.INSTANCE_CONNECTION_NAME
        ? `/cloudsql/${dbConfig.INSTANCE_CONNECTION_NAME}`
        : dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    dialectOptions: {
        ...(dbConfig.INSTANCE_CONNECTION_NAME
            ? { socketPath: `/cloudsql/${dbConfig.INSTANCE_CONNECTION_NAME}` }
            : {}),
    },
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
})

export default db
