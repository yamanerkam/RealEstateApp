import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const register = async (req, res) => {
    const { username, email, password } = req.body
    console.log("Request Body:", req.body);
    console.log("Password:", password);
    console.log(username, email, password)
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    try {

        const userEmail = await prisma.user.findUnique({
            where: { email }
        })

        const userUsername = await prisma.user.findUnique({
            where: { username }
        })

        if (userEmail) {
            if (userEmail.email === email) {
                return res.status(401).json({ message: 'email is taken!' })
            }
        }

        if (userUsername) {
            console.log(userUsername)
            if (userUsername.username === username) {
                return res.status(401).json({ message: 'username is taken!' })
            }
        }

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })

        res.status(201).json({ message: 'user created succesfully' })
    } catch (error) {
        console.log(error)
        res.status(501)
    }


}

export const login = async (req, res) => {
    const { password, username } = req.body
    try {
        const user = await prisma.user.findUnique({
            where: { username }
        })

        if (!user) return res.status(401).json({ message: 'user not found!' })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) res.status(401).json({ message: 'wrong password!' })

        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({
            id: user.id,
            isAdmin: true,
        }, process.env.JWT_SECRET_KEY, { expiresIn: age })

        const { password: userPassword, ...userInfo } = user;

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
        });
        res.json(userInfo);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'failed to login' })
    }

}

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: 'logout is succesful' })
}