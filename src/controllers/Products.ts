import express from 'express'
import { Request, Response } from 'express'
import { responseTimeMiddleware } from '../middleware/responseTime'
const router = express.Router()


interface IProduct {
    id: number,
    name: string,
    price: number
}

const productsBD: IProduct[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20.23 },
    { id: 3, name: 'Product 3', price: 30.23 },
    { id: 4, name: 'Product 4', price: 40.23 },
    { id: 5, name: 'Product 5', price: 50.23 },
    { id: 6, name: 'Product 6', price: 60.23 },
]


router.get('/', responseTimeMiddleware, (req: Request, res: Response) => {
    const delayTime = Math.random() * 5000
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(res.json(productsBD))
        }, delayTime)
    })
})

router.get('/:id', responseTimeMiddleware, (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const product = productsBD.find((p) => p.id === id)
    if (product) {
        const delayTime = Math.random() * 5000
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(res.json(product))
            }, delayTime)
        })
    } else {
        res.status(404).json({ message: 'Product not found' })
    }
})

router.post('/', (req: Request, res: Response) => {
    const { name, price } = req.body
    if (typeof price != 'number') {
        res.status(400).json({ message: 'Price must be a number' })
    }
    const id = productsBD.length + 1
    const newProduct = { id, name, price }
    productsBD.push(newProduct)
    res.status(201).json(newProduct)
})

export { router }
