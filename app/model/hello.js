module.exports = app=>{
    const{STRING}=app.Sequelize;
    const Hello =app.model.define('hello',{
        msg:STRING
    })

    return Hello;
}