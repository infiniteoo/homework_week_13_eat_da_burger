/**
 *  R O U T E  H A N D L E R 
 */

const express = require(`express`);
const burger = require(`../models/burger`);
const router = express.Router();

/**
 *  D E F A U L T  R O U T E  --->
 *  this gets all the burgers and is the main index route 
 */

router.get(`/`, (req, res) =>
    burger.selectAll((data) =>
        res.render(`index`, { burgers: data })));

/**
 *  P O S T  R O U T E --->
 *  this adds a new burger to the 'not devoured' list
 */

router.post(`/api/burgers`, (req, res) => {
    burger.insertOne(`burger_name`, req.body.burger_name, (result) => {
        res.json({ id: result.insertId });
    });
});

/**
 *  P U T  R O U T E -->
 *  this route updates a burger from 'not devoured' to 'devoured' when
 *  the yellow utensils icon is clicked  
 */

router.put(`/api/burgers/:id`, (req, res) => {
    let condition = `id = ${req.params.id}`;
    burger.updateOne(`devoured`, 1, condition, (err, result) => {
        if (err) {
            console.log(err);
        };
        res.json({ result });
    });
});

/**
 *  D E L E T E  R O U T E -->
 *  this route deletes a burger from the 'devoured' list when the red X 
 *  icon is clicked  
 */

router.delete(`/api/burgers/:id`, (req, res) => {
    let condition = `id = ${req.params.id}`;
    burger.deleteOne(condition, (err, result) => {
        if (err) {
            console.log(err);
        };
        res.json({ result });
    });
});

module.exports = router;



