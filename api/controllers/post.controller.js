import prisma from '../lib/prisma.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.send(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get users ' })
    }
}

export const getPost = async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.send(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get users ' })
    }
}

export const addPost = async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.send(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get users ' })
    }
}

export const updatePost = async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.send(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get users ' })
    }
}

export const deletePost = async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.send(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get users ' })
    }
}