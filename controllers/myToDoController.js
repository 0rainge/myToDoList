 module.exports = function(app){
     app.get('/todo',function(req, res){
         res.render('myTodo');
     });
     app.post('/todo',function(req,res){

     });
     app.delete('/todo',function(req, res){

     }); 
    
 }