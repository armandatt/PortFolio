// index.ts
import { Hono } from 'hono'
import emailRoute from './routes/emailRoute'
import { cors } from 'hono/cors'

const app = new Hono()


app.use('*', cors())
app.route('/api', emailRoute)

export default app


