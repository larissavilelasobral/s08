const express = require("express"); // importando express.
const app = express(); // instancindo express para acessar as funcionalidades contidas nele.

// chama as rotas
const movies = require('../src/routes/moviesRoutes.js');

// definir rota raiz
app.use('/filmes', movies)

const series = require("./routes/seriesRoutes")
//definir rota raiz
app.use("/series", seriesRouter)

// importando app para server.js
module.exports = app