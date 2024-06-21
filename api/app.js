import express from 'express'

const app = express()
const PORT = 3001

app.use('/api/test', (req, res) => {
    res.send('it works')
})
app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})