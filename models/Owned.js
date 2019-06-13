module.exports = function(sequelize, Datatypes){
    let Owned = sequelize.define("Owned",{
        Owned:{
            type: Datatypes.TEXT,
            allowNull: true
        }
    })
    return Owned
}