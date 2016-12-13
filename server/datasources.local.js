module.exports = {
  bpmsdb: {
    host: process.env.DBHOST || "ubuntu.estebanf.com",
    port: 3306,
    database: process.env.DATABASE || "bpmsdb",
    password: process.env.PASSWORD || "everteam",
    name: "bpmsdb",
    user: process.env.USERNAME || "root",
    connector: "mysql"
  }
}
