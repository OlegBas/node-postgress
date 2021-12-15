const express = require("express")
const userRouter = require('./routes/user.routes')
const PORT = process.env.POST || 8080

const app = express()
app.use(express.json())
app.use('/api',userRouter)

app.listen(PORT, () => {console.log('listen server on port {PORT} ');})