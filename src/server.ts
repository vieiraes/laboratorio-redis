import express from "express";

const app = express()


const getAllProducts = async () => {
    const products = [{ "type": "purchase", "category": "cards", "amount": "12.90" }]
    const delayTime = Math.random() * 5000
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, delayTime)
    })
}



// const minhaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const numero = Math.random();
//         if (numero < 0.5) {
//             resolve(numero); // resolvendo a Promise com sucesso
//         } else {
//             reject("Erro!"); // rejeitando a Promise com um erro
//         }
//     }, 1000); // esperando 1 segundo
// });



// const productsdelayed = new Promise((resolve, reject) => {
//     const products = [{ "type": "purchase", "category": "cards", "amount": "12.90" }]
//     if (products.length != 0) {
//         return resolve = () => {
//             setTimeout(() => {
//                 return products
//             }, 5000)
//         }
//     } else {
//         return reject("Erro")
//     }
// })


const responseTimeMiddleware = (req, res, next) => {
    const start = process.hrtime();
    res.on('finish', () => {
      const end = process.hrtime(start);
      const responseTime = ((end[0] * 1e9) + end[1]) / 1e6; // Response time in milliseconds
      console.log(`responseTime: ${responseTime}ms`)
    //   res.setHeader('X-Response-Time', responseTime);
    });
    next();
  };

app.get('/products', responseTimeMiddleware, async (req, res) => {
    const products = await getAllProducts()
    return res.status(200).json(products)
})



app.listen(3333, () => {
    console.log('Server is running on port 3333')
})