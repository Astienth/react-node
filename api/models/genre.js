const mongoose = require('mongoose');

const { Schema } = mongoose;
const genre = new Schema({
    name:  {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("genre", genre);