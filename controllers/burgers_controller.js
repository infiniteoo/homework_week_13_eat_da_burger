const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {

    burger.selectAll((data) => {
        const handleBarBurger = {
            burgers: data
        }
        res.render("index", handleBarBurger);
        console.log(data);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;
    burger.updateOne("devoured", 1, condition, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json({ result });
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;
    burger.deleteOne(condition, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json({ result });
    });
});
// Export routes for server.js to use.
module.exports = router;



module.exports = router;