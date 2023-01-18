const mongoose = require('mongoose');

const { Schema } = mongoose;
const console = new Schema({
    name:  {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("console", console);