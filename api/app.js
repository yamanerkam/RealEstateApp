import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
const app = express()
const PORT = 3001

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute)

app.use('/api/test', (req, res) => {
    res.send('it works')
})
app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})