import express from "express"
import * as contollers from './controllers'

const app = express()
const router = express.Router()
app.use(router)
app.use(express.json()) //importantissimo nao esquecer isso

app.use('/products', contollers.ProductController)

app.listen(3333, () => {
    console.log('Server is running on port 3333')
})