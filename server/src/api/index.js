import { Router } from 'express'
import { UserRoutes, ProjectRoutes } from './routes'

const api = Router()

api.use('/user', UserRoutes)
api.use('/project', ProjectRoutes)

export default api
