/**
 *   O. R. M.  H A N D L E R
 */

const connection = require(`../config/connection`);

const orm = {

    /**
     *  S E L E C T  A L L 
     *  grabs everything from a database
     */

    selectAll(table, cb) {

        connection.query(`SELECT * FROM ${table}`,
            (err, res) => {

                if (err) throw err;
                cb(res);

            });
    },

    /**
     *  I N S E R T  O N E 
     *  adds a new row to the database
     */

    insertOne(table, column, value, cb) {

        connection.query(`INSERT INTO ${table} (${column}) VALUES ('${value}');`,

            (err, res) => {

                if (err) throw err;
                console.log(res);
                cb(res);

            });
    },

    /**
     *  U P D A T E  O N E 
     *  updates a column in a row in the database
     */

    updateOne(table, column, boolean, condition, cb) {
        connection.query(`UPDATE ${table} SET ${column} = ${boolean} WHERE ${condition};`,

            (err, res) => {

                if (err) throw err;
                cb(res);

            });
    },

    /**
     *  D E L E T E  O N E 
     *  deletes a row from the database
     */

    deleteOne(table, condition, cb) {
        connection.query(`DELETE FROM ${table} WHERE ${condition};`,

            (err, res) => {
                if (err) throw err;
                cb(res);
            });
    }
};


module.exports = orm;
