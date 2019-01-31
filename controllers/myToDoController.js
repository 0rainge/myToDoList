 var data = [{
     item: '好好学习'
 }, {
     item: '锻炼身体'
 }, {
     item: '作息规律'
 }, {
     item: '早日暴富'
 }, {
     item: '养大猫咪'
 }];

//  var data = [{
//     item: 'get milk'
// }];

 var bodyParser = require('body-parser');

 var urlencodedParser = bodyParser.urlencoded({
     extended: false
 });

 module.exports = function (app) {
     app.get('/todo', function (req, res) {
         res.render('myTodo', {
             flags: data
         });
     });
     app.post('/todo', urlencodedParser, function (req, res) {
         data.push(req.body);
         res.json(data);
     });


     app.delete('/todo/:item', function (req, res) {
         data = data.filter(function (flags) {
            return flags.item.replace(/ /g, "-") !== req.params.item;
         });
         res.json(data);
     });

 }