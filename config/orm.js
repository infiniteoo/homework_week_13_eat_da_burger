/**
 *   O. R. M.  H A N D L E R
 */

const connection = require(`../config/connection`);

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

    updateOne(table, column, boolean, condition, cb) {
        connection.query(`UPDATE ${table} SET ${column} = ${boolean} WHERE ${condition};`,

            (err, res) => {

                if (err) throw err;
                cb(res);

            });
    },

    deleteOne(table, condition, cb) {
        connection.query(`DELETE FROM ${table} WHERE ${condition};`,

            (err, res) => {
                if (err) throw err;
                cb(res);
            });
    }
};


module.exports = orm;
