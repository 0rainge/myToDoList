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


 var bodyParser = require('body-parser');

 var urlencodedParser = bodyParser.urlencoded({extended: false});

 var mongoose = require('mongoose');
  
 mongoose.connect('mongodb://test:test666@ds117545.mlab.com:17545/flag')

 var flagSchema = new mongoose.Schema({
     item:String
 })

 var Flag = mongoose.model('Flag',flagSchema)

 var flagOne = Flag({item:'多喝水 '}).save(function(err){
     if(err) throw err;
     console.log('已保存: item saved');
 })



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