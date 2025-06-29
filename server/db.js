const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "drivers_db",
});
pool
  .connect()
  .then((client) => {
    console.log(" Connected to database:", client.database);
    client.release();
  })
  .catch((err) => console.error(" Connection error", err.stack));

module.exports = pool;
