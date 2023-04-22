import express from 'express'
import { Request, Response } from 'express'


const router = express.Router()

router.get('/status', async (req: Request, res: Response) => {
    res.send({
        message: 'ok'
    })
})

export { router }