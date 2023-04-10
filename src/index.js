import express from 'express'

import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

const PORT = 3030
app.listen(process.env.PORT || PORT, ()=> console.log("RUN SERVER " + PORT))