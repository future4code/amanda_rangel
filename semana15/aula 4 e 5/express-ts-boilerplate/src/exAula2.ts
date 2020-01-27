import {Request, Response} from "express";
import {app} from "./index";
import {AddressInfo} from "net";


app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/ping': 'retorna o texto pong',
      '/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.'
    }
  };

  // Exemplo de retorno de um JSON
  res.send(resposta)
});

app.get('/ping', (req: Request, res: Response) => {
  const hasQueryString = Object.values(req.query).length > 0;

  if(hasQueryString){
    // Exemplo de retorno de um JSON
    res.send(req.query);
  } else {
    // Exemplo de retorno de texto "puro"
    res.send('pong (nenhuma query string foi passada)');
  }
});

app.get('/hello/:name', (req: Request, res: Response) => {
  const resposta = `<h1>Olá ${req.params.name}, seja bem-vindo(a) à Future4.</h1>`;

  // Exemplo de retorno de HTML
  res.send(resposta)
});

app.post('/mirror/:cor', (req: Request, res: Response) => {
  let responseBody;

  if(req.params.cor !== "0"){
    responseBody = { ...req.body, corPredileta: req.params.cor };
  } else {
    responseBody = { ...req.body, corPredileta: "NAO INFORMADA" };
  }

  res.send(responseBody);
});





