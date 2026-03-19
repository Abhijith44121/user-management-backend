import { app } from './src/app.js'

const config = app.get('postgresql')

export default {
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  }
}