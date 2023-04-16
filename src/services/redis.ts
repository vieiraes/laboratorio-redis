//TODO: Refactor this file to use the new redis client
import redis from 'redis'

async function connection() {
    const client = redis.createClient()
    await client.connect()
    // const result = await client.set("chave", "valor")
    const result = await setKey(client)
    console.log(result)
    return client
}

function setKey(client: any) {
    return client.set("chave", "valor")
}
connection()