const express = require("express");
const app = express();
const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('db is connected'))

app.listen(5000, () => {
    console.log("server is started");
  });

app.use(express.json());

const subscribersRouter = require('./routes/subscribers')

app.use('/subscribers', subscribersRouter)