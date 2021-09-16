if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}


const express = require('express');

const cors = require('cors');

var whitelist = ['http://localhost:3001', 'https://front-annotation.herokuapp.com/']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const Conn = require('./models/conn/conn');

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

const port = 3000;

const annotation = require('./routes/annotations.routes');
app.use('/annotations', annotation);

app.listen(process.env.PORT || port, () => {
  console.info(`Servidor rodando na porta ${port}`);
});