// CT - Ex1
app.get('/getAllBrazilianClients', async (req: Request, res: Response) => {
  const query = connection.select('primeiro_nome')
      .from('correntistas')
      .where('pais', 'Brazil');
  const result = await query;
  res.send(result);
});
// CT - Ex2
app.get('/searchClientByName', (req: Request, res: Response) => {
  const nameToSearch = req.query.name;
  if(!nameToSearch){
    res.status(400).end();
    return;
  }
  const query = connection.raw(`SELECT primeiro_nome FROM correntistas WHERE primeiro_nome LIKE "%${nameToSearch}%"`)
  query.then(result => {
    res.send(result)
  })
});
// CT - Ex3
app.get('/getBirthdaysAfterDate/:date', (req: Request, res: Response) => {
  const dateToBeCompared = req.params.date;
  const query = connection.raw(`SELECT primeiro_nome, aniversario FROM correntistas WHERE aniversario < "${dateToBeCompared}"`)
  query.then(result => {
    res.send(result);
  })
});
// CT - Ex4
app.post('/createClient', (req: Request, res: Response) => {
  const newCliente = {
    ...req.body,
    divida_perdoada: 0,
    conta_corrente: 0,
  };
  const query = connection('correntistas').insert(newCliente);
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  })
});