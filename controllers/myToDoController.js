 var data = [{item:'好好学习' },{item:'锻炼身体'},{item:'作息规律'},{item:'早日暴富'},{item:'养大猫咪'}];
 
 
 module.exports = function(app){
     app.get('/todo',function(req, res){
         res.render('myTodo',{flags: data});
     });
     app.post('/todo',function(req,res){

     });
     app.delete('/todo',function(req, res){

     }); 
    
 }