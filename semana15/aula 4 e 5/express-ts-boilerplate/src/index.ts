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
  const query = connection('users')
      .insert(newUser);
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  })
});

app.put('/editUser/:id', (req: Request, res: Response) => {
  const newNickname = req.body.nickname;
  const userToEdit = req.params.id;
    const query = connection('users')
        .where('id', '=', userToEdit)
        .update({nickname: newNickname});
    query.then(result => {
      res.send(result);
    }).catch(e => {
      res.send(e);
    })
  });

app.delete('/deleteUser/:id', async (req: Request, res: Response) => {
  const userId = req.params.id;
   try {
     const query = connection('users')
         .where('id', '=', userId)
         .delete();
     const result = await query;
   } catch (error) {
       res.send(error).end();
     }
       res.sendStatus(200).end();
});

app.get('/getUserByNameOrId', (req: Request, res: Response) => {
  const name = req.query.name;
  const id = req.query.id;
  if(name  || id){
    if(name) {
      const query = connection('users')
          .select()
          .where('name', '=', name);
      query.then(result => {
        res.send(result);
      });
    } else if (id) {
      const query = connection('users')
          .select()
          .where('id', '=', id);
      query.then(result => {
        res.send(result)
      });
    }
  } else if (!name  || !id) {
    res.status(400).end();
    return;
  }
});

app.get('/getAllUsers', async (req: Request, res: Response) => {
  const age = req.query.date_of_birth;
  const name = req.query.name;
  if (age) {
    const query = connection
        .raw(`SELECT * FROM users WHERE YEAR(CURRENT_DATE()) - YEAR(date_of_birth) = ${age}`);
    const result = await query;
    res.send(result);
  } else  if (name) {
      const query = connection
          .raw(`SELECT * FROM users ORDER BY(name)`);
      const result = await query;
      res.send(result);
  } else if (!age  || !name) {
      const query = connection.raw(`SELECT * FROM users`);
      const result = await query;
      res.send(result);
  }
});

app.post('/createTask', (req: Request, res: Response) => {
  const newTask = {...req.body};
  const query = connection('tasks')
      .insert(newTask);
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  })
});

app.put('/editTask/:id',  (req: Request, res: Response) => {
  const newDescription = req.body.description;
  const newDeadline = req.body.deadline;
  const taskToEdit = req.params.id;
    const query = connection('tasks')
        .where('id', '=', taskToEdit)
        .update(
    {
            description: newDescription,
            deadline: newDeadline
          });
    query.then(result => {
      res.send(result);
    }).catch(e => {
      res.send(e);
    })
  });

app.put('/editTaskAssignee/:id',  (req: Request, res: Response) => {
  const newAssignee = req.body.task_assignee;
  const taskToEdit = req.params.id;
  const query = connection('tasks')
      .where('id', '=', taskToEdit)
      .update(
          {
            task_assignee: newAssignee,
          });
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  })
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

