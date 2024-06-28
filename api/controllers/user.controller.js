import prisma from '../lib/prisma.js'


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
    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to update the user' })
    }

}

export const deleteUser = async (req, res) => {
    const id = req.params.id

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