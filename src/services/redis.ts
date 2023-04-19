import { createClient } from 'redis';

class RedisCLient {
    async connect() {
        const client = createClient()
        client.on('error', err => console.log('Redis Client Error', err))
        if(client.isOpen){ //checa se o Redis realmente esta conectado
            return await client.connect()
        }
    }
    async setCache(key: any, value: any) {
        const client = createClient()
        return await client.set(key, value)
    }

    async getRedis(key: string) {
        const client = createClient()
        return await client.get(key)
    }

    async disconnectRedis() {
        const client = createClient()
        return await client.disconnect()
    }

}

export { RedisCLient }

// export const clientRedis = createClient();

// clientRedis.on('error', err => console.log('Redis Client Error', err));

// export async function connectRedis() {
//     return await clientRedis.connect()   
// }

// async function setCache() {
//     return await clientRedis.set('key', 'value');
// }

// async function getRedis() {
//     const value = await clientRedis.get('key');
//     return value
// }

// async function disconnectRedis() {
//     return await clientRedis.disconnect();
// }