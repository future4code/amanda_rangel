import knex from "knex";

export abstract class KnexDatabaseConnection {
   protected connection = knex({
    client: 'mysql',
    connection: {
      host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
      user: 'amanda',
      password: process.env.DB_PASSWORD,
      database: 'amanda'
    }
  });
}
