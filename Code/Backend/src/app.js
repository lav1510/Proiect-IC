require("./config/db");

const express = require("express");
const morgan = require('morgan');
const bodyParser = express.json;
const cors = require("cors");
const routes = require("./Routes/routes");

const app = express();

app.get('', (req, res) => {
    res.send('Hello server')
})


app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser());
app.use("/api", routes);


module.exports = app;