import Redis from "ioredis"

const redis = new Redis()

const res = await redis.keys('*')
console.log(res)

await redis.lpush('ioredis-test', '111')
await redis.lpush('ioredis-test', '222')
await redis.rpush('ioredis-test', '333')
await redis.rpush('ioredis-test', '444')