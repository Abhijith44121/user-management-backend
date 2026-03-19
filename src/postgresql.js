import knex from 'knex'

export const postgresql = async (app) => {
  const db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
  })

  // 🔥 IMPORTANT: correct key name
  app.set('postgresqlClient', db)
}