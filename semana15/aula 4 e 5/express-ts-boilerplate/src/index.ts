import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

export const app = express();
app.use(express.json()); // Linha mágica (middleware)

export const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'amanda',
    password : 'process.env.SENHA_BANCO',
    database : 'amanda'
  }
});

app.post('/createUser', (req: Request, res: Response) => {
  const newUser = {...req.body};
  const query = connection('users').insert(newUser);
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  })
});

app.put('/editUser', (req: Request, res: Response) => {
  const editedUser = {...req.body};
  const query = connection('users').increment('nickname');
  query.then(result => {
    res.send(editedUser);
  }).catch(e => {
    res.send(e);
  })
});




