import { createClient } from "redis"

const client = createClient({
	socket: {
		host: "localhost",
		port: 6379
	}
})

client.on('error', err => console.log('Redis Client Error:', err))

await client.connect()

const value = await client.keys('*')

console.log(value)


await client.hSet('xin1', '111', 'value111')
await client.hSet('xin1', '222', 'value222')
await client.hSet('xin1', '333', 'value333')

await client.lPush('test', 'hello1')
await client.lPush('test', 'hello1')
await client.lPush('test', 'hello2')
await client.lPush('test', 'hello3')
await client.rPush('test', 'hello4')
await client.rPush('test', 'hello5')

await client.lPop('test')

await client.keys('*')

await client.disconnect()
