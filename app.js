var express = require('express'),
  app = express();
var index = require('./router/index');
app.set('view engine', 'ejs');


app.use(index);

app.listen(3000);
