import knex from 'knex'

export const postgresql = async (app) => {
  console.log("DB URL:", process.env.DATABASE_URL)

  const db = knex({
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' 
        ? { rejectUnauthorized: false } 
        : false
    }
  })

  app.set('postgresqlClient', db)
}