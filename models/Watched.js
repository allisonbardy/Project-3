module.exports = function(sequelize, Datatypes){
    let Watched = sequelize.define("Watched",{
        symbol:{
            type: Datatypes.STRING,
            allowNull: false
        }
    })
    Watched.associate= function(models){
        Watched.belongsTo(models.User,{
            foreign: 'user',
            allowNull:false
        })
    }
    return Watched
}