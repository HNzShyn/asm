const mongoose = require("mongoose");

var ToySchema = new mongoose.Schema({
    name: String,
    image: String,
    brand: String,
    price: Number,
    date: Date,
    color: String,
    description: String
}, {
    versionKey: false //optional (to remove _v: 0 when add new data)
})

var ToyModel = mongoose.model('toy', ToySchema, 'toy')
module.exports = ToyModel