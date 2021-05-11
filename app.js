const express = require('express'),
  app = express(),
  router = require('./router/router');

app.set('view engine', 'ejs');

app.use('/', router);

app.listen(3000);
