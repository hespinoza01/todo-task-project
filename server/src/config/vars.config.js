import dotenv from 'dotenv'

// loading vars from .env
dotenv.config()

export default {
    PORT: process.env.PORT || 5000,
    DB: {
        NAME: process.env.DB_NAME,
        HOST: process.env.DB_HOST || 'localhost',
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        DIALECT: process.env.DB_DIALECT || 'mysql',
    },
}
