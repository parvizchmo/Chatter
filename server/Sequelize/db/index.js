const Sequelize = require("sequelize");
const {DataTypes} = require("sequelize");
const sequelize = new Sequelize("drivers_db","root","123456",{
    dialect: "postgres",
    host: "localhost",
})

const User = require("./Sequelize/db/Users")(sequelize,DataTypes);
module.exports = {sequelize: sequelize,
    user: User}
