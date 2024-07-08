import prisma from '../lib/prisma.js'
import bcrypt from "bcrypt";


export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.send(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get users ' })
    }

}

export const getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        })
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get the user ' })
    }

}

export const updateUser = async (req, res) => {
    const id = req.params.id
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" });
    }

    let newPassword = null
    try {
        if (password) {
            newPassword = await bcrypt.hash(password, 10);
        }
        const updateUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(password && { password: newPassword }),
                ...(avatar && { avatar }),
            },
        })
        res.send(updateUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to update the user' })
    }

}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    const tokenUserId = req.userId;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" });
    }

    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id: id,
            },
        })
        res.send(deleteUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to delete the user' })
    }

}