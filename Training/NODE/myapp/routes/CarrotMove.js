const express = require('express');
const router = express.Router();

const CarrotMove = require('../model/CarrotMove');

router.get('/', async (req, res) => {
    try {
        const carrotMoves = await CarrotMove.find();
        res.json(carrotMoves);
    }
    catch (err) {
        console.log(err.message);
    }
});

router.post('/', async (req, res) => {
    console.log( req.body );
    try {
        const carrotMove = new CarrotMove({
            from_basket_id: req.body.from_basket_id,
            to_basket_id: req.body.to_basket_id,
            qty: req.body.qty,
            lot_id: req.body.lot_id,
            event_id: req.body.event_id,
            reference: req.body.reference,
        });

        await carrotMove.save();
        res.status(201).json(carrotMove);
    }
    catch (err) {
        console.log(err.message);
    }
});

module.exports = router;