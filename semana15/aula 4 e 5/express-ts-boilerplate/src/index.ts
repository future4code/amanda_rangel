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
    password : process.env.SENHA_BANCO,
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

app.put('/editUser/:id', async (req: Request, res: Response) => {
  const newNickname = req.body.nickname;
  const userToEdit = req.params.id;
  try {
    const query = connection('users').where('id', '=', userToEdit).update({nickname: newNickname});
    const result = await query;
  } catch (error) {
    res.sendStatus(500).end();
  }
    res.sendStatus(200).end();
  });


// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

