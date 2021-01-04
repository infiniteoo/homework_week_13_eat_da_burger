const connection = require('connection.js');

const orm = {

    selectAll() {

        connection.query(`
        
        SELECT 
        *
        FROM
        burgers
        `
            , (err, res) => {

                if (err) throw err;

                return res;

            });


    },

    insertOne(id, burgerName) {
        connection.query(`

        INSERT INTO 
        burgers
        VALUES('${id}', '${burgerName}', false);
        
        
        `
            , (err, res) => {

                if (err) throw err;
                console.log(res);
                return res;

            });


    },

    updateOne(id) {
        connection.query(`

        UPDATE
        burgers
        SET devoured = true
        WHERE
            id = ${id};       
        
        `
            , (err, res) => {

                if (err) throw err;
                console.table(res);
                return res;

            });


    }


};


module.exports = orm;
