import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const admin = async (req, res) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: 'no user logged in' })
    console.log(token)

    console.log('admin is succesful')
    res.send('admin')
}

export const loggedIn = async (req, res) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: 'no user logged in' })
    console.log(token)
    console.log('logged-in is succesful')
    res.send('logged-in')
}
