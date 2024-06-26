import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { verifyToken } from '../middleware/verifyToken.js'
dotenv.config()


export const admin = async (req, res) => {
    const token = req.cookies.token

    if (!token) return res.status(401).json({ message: 'not Authenticated' })
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(payload)
        if (!payload.isAdmin) return res.status(403).json({ message: 'not authorised' })
    } catch (err) {
        if (err) return res.status(403).json({ message: 'Token is not valid!' })
    }


    res.status(200).json("admin is authenticated")
}

export const loggedIn = async (req, res) => {
    console.log(req.userId)
    res.status(200).json("user is authenticated")

}
