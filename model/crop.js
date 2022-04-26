const mongoose = require('mongoose')

const crops = new mongoose.Schema({
    // _id : {type: Number, required: true},
    name: {type: String,required: true},
    soil: {type: String,required: true},
    season: {type: Array,required: true},
    investment: {type: Number,required: true},
    waterReq: {type: Number,required: true},
    profit: {type: Number,required: true},
    brief: {type: String,required: true},
    info:{type: String,required: true},
    img: {type: String,required: true}
},{collection: 'crops',timestamps: true})

const Crop = mongoose.model('Crop',crops)

module.exports = Crop