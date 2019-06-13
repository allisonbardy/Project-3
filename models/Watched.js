module.exports = function(sequelize, Datatypes){
    let Watched = sequelize.define("Watched",{
        Watched:{
            type: Datatypes.TEXT,
            allowNull: true
        }
    })
    return Watched
}