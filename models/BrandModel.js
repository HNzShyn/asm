const mongoose = require("mongoose");

var BrandSchema = new mongoose.Schema({
    name: String,
    image: String
}, {
    versionKey: false //optional (to remove _v: 0 when add new data)
})

var BrandModel = mongoose.model('brand', BrandSchema, 'brand')
module.exports = BrandModel;