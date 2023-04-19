// //TODO: Refactor this file to use the new redis client
// import Redis from 'ioredis'

// const redis = new Redis({
//     port: 6379,
//     host: '127.0.0.1',
//     db: 0
// })


// redis.set('foo', 'bar')
// redis.get('foo', function (err, result) {
//     console.log(result)
// })


// export async function redisConnection() {
//     const client = redis.createClient()
//     await client.connect()
//     // const result = await client.set("chave", "valor")
//     const result = await setKey(client)
//     console.log(result)
//     return client
// }
// redisConnection()

// interface IKey {
//     key: string
//     value: string
// }


// function setKey(client: any) {
//     return new Promise((resolve) => {
//         client.set("chave", "valor", (err: any, reply: any) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             resolve(reply)
//         })
//     })//FIM DA PROMISE
// }