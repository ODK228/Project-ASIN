const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./Config/dbconfig');
const app = express();

app.use(bodyParser.json());

const agricultorRoutes = require('./routes/agricultor');
const culturRoutes = require('./routes/cultur');
const departementRoutes = require('./routes/departement');
const AreaRoutes = require('./routes/Area');

app.use('/agricultors', agricultorRoutes);
app.use('/culturs', culturRoutes);
app.use('/departements', departementRoutes);
app.use('/Area', AreaRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
