import express from 'express'
import Redis from 'ioredis'


// export const redisConn  = (async () => {
//     const client = createClient();
//     client.on('connect', () => {
//         console.log('Redis connected.......')
//     })
//     client.on('error', (err) => {
//         console.log('Redis error: ', err)
//     })
//     await client.connect()
// })()

export async function connectionRedis() {
    const redis = new Redis() // ja faz a conexao
    redis.set('key', 'value')
}
