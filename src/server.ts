import express from "express"
import * as contollers from './controllers'
import { RedisCLient } from './services/redis'


const app = express()
const router = express.Router()
app.use(router)
app.use(express.json()) //importantissimo nao esquecer isso



const bootstrap = async () => {
    const server = app.listen(3333, () => {
        console.log('Server is running on port 3333')
    })
    if (server) {
        const redisConnection = new RedisCLient()
        await redisConnection.connect()
        console.log('Redis connected')
    } else {
        console.log('Server not started')
    }
}
bootstrap()

/**
 * @route
 */
app.use('/products', contollers.ProductController)