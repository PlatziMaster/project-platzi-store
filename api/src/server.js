const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { config } = require('./config/index');

app.use(bodyParser.json());

const ordersApi = require('./routes/orders');
ordersApi(app);


const conversationsApi = require('./routes/conversations');
conversationsApi(app);

app.listen(config.port, () => {
  console.log(`server: ${config.port}`);
});
