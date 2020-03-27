const express = require('express');  //Importa a biblioteca express
const routes = require('./routes');
const cors = require('cors');

const app = express();   //armazena a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
*/

/**
  * Métodos HTTP:
  * 
  * GET:Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
*/

/**
   * Tipos de parâmetros:
   * 
   * Query: parâmetros nomeados enviados na rota após "?", (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: Select * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.post('/users', (request, response) => {  //Pega o app
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Guilherme de Melo Basílio'
    })   //Mostra no site a mensagem
});

app.listen(3333);   //Porta para rodar a aplicação