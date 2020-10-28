const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const CONSTANT = require('./CONSTANT.json');
const userRoutes = require('./routes/userRoutes');

const port = 3000;

mongoose.connect(CONSTANT.mongoDbUri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Db connected successfully.')
    })
    .catch((err) => {
        console.log(`Db connected failed, reason : ${err}`)
    })

app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoutes);

http.createServer(app).listen(port);