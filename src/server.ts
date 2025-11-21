import Fastify from 'fastify'
import { helloWorldTask } from './trigger/example.js'
import dotenv from 'dotenv'

dotenv.config()

const app = Fastify({ logger: true })

app.get('/ping', async () => {
    return { ping: 'pong' }
})

app.post('/hello-task', async () => {

    helloWorldTask.trigger({ foo: 'bar' })

    return { success: true }
})

const start = async () => {
    try {
        await app.listen({ port: 3000, host: '0.0.0.0' })
        console.log('Servidor rodando em http://localhost:3000')
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()