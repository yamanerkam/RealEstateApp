import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.token
    console.log(token)
    if (!token) return res.status(401).json({ message: 'not Authenticated' })
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(req)
        console.log(payload)
        req.userId = payload.id;
    } catch (err) {
        if (err) return res.status(403).json({ message: 'Token is not valid!' })
    } finally {
        next()
    }
}
