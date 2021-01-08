const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {

    burger.selectAll((data) => {
        const handleBarBurger = {
            burgers: data
        }
        res.render("index", handleBarBurger);
    });
});



module.exports = router;