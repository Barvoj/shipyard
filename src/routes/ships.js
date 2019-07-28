const express = require('express');
const storage = require('./../storage');
const router = express.Router();

/**
 * Fetches list of Ships
 */
router.get('/', function(req, res, next) {
    res.set('Content-Type', 'application/json');
    res.status(200).json(storage);
});

/**
 * Add ship to shipyard
 */
router.post('/', function (req, res) {
    const newShip = {
        id: storage.length + 1,
        name: req.body.name,
        speed: req.body.speed,
    };
    storage.push(newShip);

    res.set('Content-Type', 'application/json');
    res.status(201).json(newShip);
});

module.exports = router;
