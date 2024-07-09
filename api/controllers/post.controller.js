import prisma from '../lib/prisma.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        res.send(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get the posts ' })
    }
}

export const getPost = async (req, res) => {
    const id = req.params.id
    try {
        const post = await prisma.post.findUnique({
            where: { id },
        })
        res.status(200).json({ post })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get the post ' })
    }
}

export const addPost = async (req, res) => {
    const body = req.body
    const tokenUserId = req.userId;

    try {
        const newPost = await prisma.post.create({
            data: {
                ...body,
                userId: tokenUserId,
            }
        })
        res.send(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to add a user ' })
    }
}

export const updatePost = async (req, res) => {
    const id = req.params.id
    const tokenUserId = req.userId;
    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" });
    }
    try {
        const posts = await prisma.post.findMany()
        res.send(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to get users ' })
    }
}

export const deletePost = async (req, res) => {
    const id = req.params.id
    const tokenUserId = req.userId;

    try {
        const post = await prisma.post.findUnique({
            where: { id },
        })
        if (post.userId !== tokenUserId) {
            return res.status(403).json({ message: "Not Authorized!" });

        }
        await prisma.post.delete({
            where: { id },
        })
        res.status(200).json({ msg: "post deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete post" });
    }
}