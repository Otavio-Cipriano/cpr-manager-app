import express, { Router, Request, Response } from 'express'

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response)=>{
    return res.send("Hello friend")
})

app.use(route)


export default app