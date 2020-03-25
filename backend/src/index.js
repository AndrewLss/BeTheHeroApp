const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Rotas = Recusos

/*
** Métodos
    Get: Busca/Lista uma informação no backend
    Post: Cria uma informação no backend
    Put: Altera uma informação no backend
    Delete: Exclui uma informação no backend
*/

/*
** Tipos de Parâmetros
    Query Params: Parâmetros nomeados enviados na rota apos "?" (Filtros, Paginação)
    Route Params: Parâmetros utilizados para identificar os recursos
    Request Body: Corpo da requisição, utiilizado para criar ou alterar recursos
*/


app.listen (3333);