const mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "blahblah",
        port: 3306,
        database: "burgers_db"
    });
}



connection.connect(err => {

    if (err) throw err;
    console.log(`Connected to MYSQL database: ${connection.config.host} on port ${connection.config.port}`);

});

module.exports = connection;



