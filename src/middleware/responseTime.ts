import { Request, Response, NextFunction } from "express"
export const responseTime = (req: Request, res: Response, next: NextFunction) => {
    const start = process.hrtime()
    res.on('finish', () => {
        const end = process.hrtime(start)
        const responseTime = (((end[0] * 1e9) + end[1]) / 1e6) / 1000// para converter em segundos
        console.log(`responseTime: ${responseTime}s`)
    })
    next()
}