const mongoose = require('mongoose');

const CarrotMoveSchema = mongoose.Schema({
    from_basket_id: {
        type: Number ,
        required: true
    },
    to_basket_id: {
        type: Number ,
        required: true
    },
    qty: {
        type: Number ,
        required: true
    },
    lot_id: {
        type: Number ,
        required: true
    },
    event_id: {
        type: Number,
        required: false
    },
    
    reference: {
        type: String,
        required: false
    },
})

const carrotMove = mongoose.model('carrot_move', CarrotMoveSchema)

module.exports = carrotMove;

