
module.exports = function(app){
    app.get('/', function(req,res){
        res.render('home/index');
    });

    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    app.get('/noticias', function(req,res){

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiaModel;

        noticiasModel.getNoticias(connection, (error,result) => {
            res.render('noticias/noticias', {noticias : result});
        });
    });

    app.get('/noticia/:id', function(req,res){

        var connection = app.config.dbConnection();
        var id = req.params.id;
        var noticiasModel = app.app.models.noticiaModel;

        noticiasModel.getNoticia(connection, (error,result) => {
            res.render('noticias/noticia', {noticia : result});
        },id);
        
    });
}