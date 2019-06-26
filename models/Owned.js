module.exports = function(sequelize, Datatypes){
    let Owned = sequelize.define("Owned",{
        symbol:{
            type: Datatypes.STRING,
            allowNull: false
        }
        



    })
    Owned.associate= function(models){
        Owned.belongsTo(models.User,{
            foreign: 'user',
            allowNull:false
        })
    }
    return Owned
}