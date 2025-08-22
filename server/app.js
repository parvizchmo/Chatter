const express = require("express");
const driverRoutes = require("./routes/userRoutes");
const port = 3000;

//подключение sequelize к БД
const Sequelize = require("sequelize");
const db = require("./db");
function t01(){
    user.findAll().then((users) => {
        console.log(users);
    })
}

const createTable = require("./initDB");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", driverRoutes);

createTable();

app.listen(port, console.log(`Server has started on port ${port}`));
