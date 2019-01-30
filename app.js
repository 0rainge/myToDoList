var express = require('express');

var app = express();
 
app.set('view engine','ejs');

app.use(express.static('./public'));

app.listen(3000);

console.log('listenging to port 3000'); 
  