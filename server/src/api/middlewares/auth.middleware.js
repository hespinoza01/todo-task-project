import { DecodeToken } from '@/utils'

/**
 * Check user credentials before request
 */
export default async function AuthMiddleware(req, res, next) {
    try {
        // extract token header
        const token = req.header('Authorization') || null

        // assign user data to req
        req.user = await DecodeToken(token)

        next()
    } catch (error) {
        console.log(error)

        return res.status(401).json({
            error: true,
            message: 'Tu sesión ha caducado',
        })
    }
}
