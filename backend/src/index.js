const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connect = require('./config/server-config');
const app = express();
const port = process.env.PORT;
const ApiRoutes = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', ApiRoutes);

app.listen(port, async() => {
  console.log(`Server is running on ${port}`);
  await connect();
  console.log('Connected to MongoDB');
});