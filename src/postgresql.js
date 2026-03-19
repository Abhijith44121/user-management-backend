import knex from 'knex'

export const postgresql = async (app) => {
  console.log("DB URL:", process.env.DATABASE_URL) // 👈 for debugging

  const db = knex({
    client: 'pg',
    connection: process.env.DATABASE_URL  // ✅ THIS LINE
  })

  app.set('postgresqlClient', db)
}