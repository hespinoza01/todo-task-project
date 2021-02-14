import { Router } from 'express'
import { UserRoutes } from './routes'

const api = Router()

api.use('/user', UserRoutes)

export default api
