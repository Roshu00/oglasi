const {snakeCaseMappers} = require('objection');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'roshu',
      password : 'loncanik123',
      database : 'tehnopsesia'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...snakeCaseMappers
  },
};
