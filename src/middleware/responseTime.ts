
const getAllProducts = async () => {
    const products = [{ "type": "purchase", "category": "cards", "amount": "12.90" }]
    const delayTime = Math.random() * 5000
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, delayTime)
    })
}

export const responseTimeMiddleware = (req, res, next) => {
    const start = process.hrtime()
    res.on('finish', () => {
        const end = process.hrtime(start)
        const responseTime = (((end[0] * 1e9) + end[1]) / 1e6) / 1000// para converter em segundos
        console.log(`responseTime: ${responseTime}s`)
    })
    next()
}