const Pool = require("pg").Pool;

const pool = new Pool({
  user: "webadmin",
  password: "CHQvvd52280",
  host: "jdbc:postgresql://node61386-pern-db.jcloud-ver-jpe.ik-server.com",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
