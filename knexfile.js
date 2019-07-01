module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/craigslistdb",
    migrations: {
      directory: "./db/migrations"
    },
    production: {
      client: "pg",
      connection: process.env.DATABASE_URL + `?ssl=true`,
      seeds: {
        directory: "./db/seeds/dev"
      },
      seeds: {
        directory: "./db/seeds/dev"
      },
      useNullAsDefault: true
    }
  }
};
