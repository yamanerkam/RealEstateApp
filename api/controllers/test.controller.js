import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const admin = async (req, res) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: 'not Authenticated' })
    console.log(token)

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) return res.status(403).json({ message: 'Token is not valid!' })
    })
    res.status(200).json("admin is authenticated")
}

export const loggedIn = async (req, res) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: 'no user logged in' })
    console.log(token)
    console.log('logged-in is succesful')
    res.send('logged-in')
}
