import express from 'express'
import util from 'util';
import { Request, Response } from 'express'
import * as middleware from '../middleware'
import Redis from 'ioredis'

const router = express.Router()


interface IProduct {
  id: string,
  name: string,
  price: number
}

const productsBD: IProduct[] = [
  { id: "1", name: 'Product 1', price: 10 },
  { id: "2", name: 'Product 2', price: 22.99 },
  { id: "3", name: 'Product 3', price: 35.26 },
  { id: "4", name: 'Product 4', price: 47.25 },
  { id: "5", name: 'Product 5', price: 53.53 },
  { id: "6", name: 'Product 6', price: 60.23 },
  { id: "7", name: 'Product 7', price: 65.23 },
  { id: "8", name: 'Product 8', price: 70.44 },
  { id: "9", name: 'Product 9', price: 75.00 },
  { id: "10", name: 'Product 10', price: 80.88 },
]

/* 
LISTA PRODUCT POR ID
ESTE ENDPOINT É O QUE SIMULA COM O REDIS
 */
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  let isCached = false;
  let results: IProduct | undefined;
  const redis = new Redis() // ja se conecta
  let hasDelay = false;

  try {
    const cacheResponse = await redis.get(id)
    if (cacheResponse) {
      isCached = true
      results = JSON.parse(cacheResponse);
      hasDelay = false
    } else {
      results = productsBD.find((p) => p.id === id)
      if (results) {
        hasDelay = true
        redis.set(id, JSON.stringify(results))
      } else {
        res.status(404).send({
          "message": "not found"
        })
      }
    }
    const objectResponse = {
      isCached,
      result: results,
    }
    if (!hasDelay) { //REDIS
      res.status(200).send(objectResponse)
    }
    if (hasDelay) {//BD
      const time = Math.random() * 5000
      setTimeout(() => {
        res.status(200).send(objectResponse)
      }, time)
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'error',
      error: e,
    });
  }

})
//LISTA TODOS PRODUCTS
router.get('/', middleware.responseTime, middleware.delayTime, (req: Request, res: Response) => {
  return res.json(productsBD)
})



//CRIA NOVO PRODUCT
router.post('/', (req: Request, res: Response) => {
  const { name, price } = req.body
  if (typeof price != 'number') {
    res.status(400).json({ message: 'Price must be a number' })
  }
  const id = (productsBD.length + 1).toString()
  const newProduct = { id, name, price }
  productsBD.push(newProduct)
  res.status(201).json(newProduct)
})

export { router }