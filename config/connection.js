const mysql = require('mysql');

const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "blahblah",
    port: 3306,
    database: "burgers_db"

});

connection.connect(err => {

    if (err) throw err;
    console.log(`Connected to ${connection.config.host} on port ${connection.config.port}`);

});

module.exports = connection;



