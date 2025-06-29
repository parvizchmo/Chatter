const express = require("express");
const driverRoutes = require("./routes/driver_routes");
const port = 3000;
const createTable = require("./initDB");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", driverRoutes);

createTable();

app.listen(port, console.log(`Server has started on port ${port}`));
