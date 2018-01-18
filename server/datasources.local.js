module.exports = {
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "mysql": {
    "url": process.env.CLEARDB_DATABASE_URL,
    "host": "localhost",
    "port": 8889,
    "database": "bdcodification2",
    "password": "root",
    "name": "mysql",
    "user": "root",
    "connector": "mysql",
    "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
  }
}
