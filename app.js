var express = require('express');
var myTodoController = require('./controllers/myToDoController');

var app = express();
 
app.set('view engine','ejs');

app.use(express.static('./public'));

app.listen(3000);

myTodoController(app);

console.log('L istenging to port 3000'); 
  