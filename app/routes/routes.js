
module.exports = function(app){
    app.get('/', function(req,res){
        res.render('home/index');
    });

    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    app.get('/noticias', function(req,res){

        var connection = app.config.dbConnection();

        connection.query("select * from noticias", (error,result) => {
            res.render('noticias/noticias', {noticias : result});
        });
    });

    app.get('/noticia', function(req,res){

        var connection = app.config.dbConnection();

        connection.query("select * from noticias where id = 1", (error,result) => {
            res.render('noticias/noticia', {noticia : result});
        });
    });
}