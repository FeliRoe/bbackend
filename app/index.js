const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const sequelize = require('./util/database');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

app.use('/show', require('./routes/show'));
app.use('/benutzer', require('./routes/benutzer'));
app.use('/interessenten', require('./routes/interessenten'));
app.use('/bilder', require('./routes/bilder'));


(async () =>{
  try {
    await sequelize.sync(
      {force: false}
    );
    console.log("Bereit!");
    app.listen(process.env.EXTERNAL_PORT || 6969);
  } catch (error) {
    console.error(error);
  }
})()