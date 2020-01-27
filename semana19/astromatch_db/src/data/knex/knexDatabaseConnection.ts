import knex from "knex";

export abstract class KnexDatabaseConnection {
  protected connection = knex({
    client: 'mysql',
    connection: {
      host: 'ec2-54-172-20-251.compute-1.amazonaws.com',
      user: 'amanda',
      password: process.env.DB_PASSWORD,
      database: 'astromatchdb'
    }
  });
}
