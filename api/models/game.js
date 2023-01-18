const mongoose = require('mongoose');

const { Schema } = mongoose;
const game = new Schema({
    title:   {
        type: String,
        required: true,
    }, 
    consoles: [{
        type: Schema.Types.ObjectId,
        ref: 'console',
        required: true,
    }],
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'genre',
        required: true,
    },
    review:  {
        type: Number,
        required: true,
        min:0,
        max:10,
    },
});

module.exports = mongoose.model("game", game);