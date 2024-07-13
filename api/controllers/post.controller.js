import { create } from 'domain'
import prisma from '../lib/prisma.js'

export const getPosts = async (req, res) => {
    const query = req.query
    console.log(query)
    try {
        const posts = await prisma.post.findMany({
            where: {
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price: {
                    gte: parseInt(query.minPrice) || undefined,
                    lte: parseInt(query.maxPrice) || 1000000000,
                },
            },
            include: {
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                }
            }
        })
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
            include: {
                PostDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                }
            }
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
                ...body.postData,
                userId: tokenUserId,
                PostDetail: { create: body.postDetail }
            },
        });
        console.log(newPost)
        res.status(200).json(newPost);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'failed to add a post ' })
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