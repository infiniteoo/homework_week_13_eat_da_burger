/**
 * M Y S Q L  D A T A B A S E  C O N N E C T I O N 
 */

const mysql = require('mysql');

var connection;

/* custom code to connect to JawsDB via Heroku. 
 if we're on heroku it will set the connection 
 object for that, but if we're developing on our
 local machine it will use our local server info. */

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
};

// once we've determined the platform, let's connect
connection.connect(err => {

    if (err) throw err;
    console.log(`Connected to MYSQL database: ${connection.config.host} on port ${connection.config.port}`);

});

module.exports = connection;



