const express = require('express');
const bodyParser = require('body-parser');
const db = require('./Config/dbconfig');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/users', require('./routes/Users'));
app.use('/api/departments', require('./routes/Departments'));
app.use('/api/productions', require('./routes/Productions'));
app.use('/api/type_users', require('./routes/Type_users'));
app.use('/api/cultures', require('./routes/Culture'));

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
