import express from "express"
import * as controllers from './controllers'


const app = express()
const router = express.Router()
app.use(router)
app.use(express.json()) //importantissimo nao esquecer isso



const bootstrap = async () => {
    const server = await app.listen(3333, () => {
        console.log('Server is running on port 3333')
    })
    if (server) {
        console.log('Server started')
    } else {
        console.info('Server NOT started')
    }
}
bootstrap()



/**
 * @route
 */
app.use('/products', controllers.ProductController)
app.use('/', controllers.HealthCheckController)