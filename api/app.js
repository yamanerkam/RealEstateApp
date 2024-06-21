import express from 'express'
import userRoute from './routes/user.route.js'
const app = express()
const PORT = 3001

app.use('/api/u', userRoute)

app.use('/api/test', (req, res) => {
    res.send('it works')
})
app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})