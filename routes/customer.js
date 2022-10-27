var express = require('express');
const ToyModel = require('../models/ToyModel')
var router = express.Router();

router.get('/', (req, res) => {
    ToyModel.find((err, data) => {
        if(!err){
            res.render('customer/index', {toy: data})
        }
    })
})

router.get('/detail/:id', (req, res) => {
    ToyModel.findById(req.params.id, (err, data) => {
        if (!err) {
            res.render('customer/detail', { toy: data })
        }
    })
})

router.post('/search', (req, res) => {
    ToyModel.find({ name: new RegExp(req.body.name, "i") }, (err, data) => {
        if (!err) {
            res.render('customer/index', { toy: data })
        }
    })
})

router.get('/sort/asc', (req, res) => {
    ToyModel.find()
        .sort({ name: 1 })
        .exec((err, data) => {
            if (!err) {
                res.render('customer/index', { toy: data })
            }
        })
})

router.get('/sort/desc', (req, res) => {
    ToyModel.find()
        .sort({ name: -1 })
        .exec((err, data) => {
            if (!err) {
                res.render('customer/index', { toy: data })
            }
        })
})

module.exports = router;
