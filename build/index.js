const express = require('express');

const app = express();

const morgan = require('morgan');

const pkg = require('../package.json');

app.set("pkg", pkg);
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.use(express.json());
app.use(morgan('dev'));
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Products API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author
  });
});
app.listen(app.get('port'), () => {
  console.log(`Servidor por el puerto ${app.get('port')}`);
});