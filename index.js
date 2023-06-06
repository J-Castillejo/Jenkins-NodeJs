const express = require("express");
const { getConnection } = require("./db/db-connection-mongo");
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(cors());

getConnection();

app.use(express.json());

app.use('/proyecto', require('./router/proyecto'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
