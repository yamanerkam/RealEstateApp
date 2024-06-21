import express from "express";
const router = express.Router()
router.use(express.json());

router.get('/', (req, res) => {
    res.send('user-route')
})

router.get('/user', (req, res) => {
    res.send('user')
})

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    res.send(`user id is ${userId}`)
})

export default router