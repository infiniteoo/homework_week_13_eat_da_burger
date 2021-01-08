const connection = require('../config/connection');

const orm = {

    selectAll(table, cb) {

        connection.query(`SELECT * FROM ${table}`,
            (err, res) => {

                if (err) throw err;
                cb(res);

            });
    },

    insertOne(table, column, value, cb) {

        connection.query(`INSERT INTO ${table} (${column}) VALUES ('${value}');`,
            (err, res) => {

                if (err) throw err;
                console.log(res);
                cb(res);

            });


    },

    updateOne(table, id, cb) {
        connection.query(`UPDATE ${table} SET devoured = true WHERE id = ${id};`,
            (err, res) => {

                if (err) throw err;
                cb(res);

            });
    }
};


module.exports = orm;
