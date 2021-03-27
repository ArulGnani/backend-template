import express, { json } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'


export const app = express()

app.use(json())

app.use(cors())

dotenv.config()


app.get("/", (req, res) => res.send("server running."))


app.listen(process.env.PORT, () => { 
    console.log(`server running d @${process.env.PORT}`)
})