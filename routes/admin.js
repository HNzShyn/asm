var express = require('express');
const ToyModel = require('../models/ToyModel')
var router = express.Router();

router.get('/', (req, res) => {
    ToyModel.find((err, data) => {
        if(!err){
            res.render('admin/index', {toy: data})
        }
    })
})

router.get('/add', (req, res) => {
    res.render("admin/add");
})

router.post('/add', (req, res) => {
    ToyModel.create(req.body, (err) => {
        if (!err) {
            res.redirect("/admin")
        }
    })
})

router.get('/edit/:id', (req, res) => {
    ToyModel.findById(req.params.id, (err, data) => {
        if (!err) {
            res.render("admin/edit", { toy: data })
        }
    })
})

router.post('/edit/:id', (req, res) => {
    var id = req.params.id;
    var toy = req.body;
    ToyModel.findByIdAndUpdate(id, toy, (err) => {
        if (!err) {
            res.redirect("/admin")
        }
    })
})


router.get('/delete/:id', (req, res) => {
    ToyModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/admin");
        }
    })
})

router.get('/drop', (req, res) => {
    ToyModel.deleteMany({}, () => {
        console.log("Delete all data succeed !")
        res.redirect('/admin')
    })
})

router.get('/detail/:id', (req, res) => {
    ToyModel.findById(req.params.id, (err, data) => {
        if (!err) {
            res.render('admin/detail', { toy: data })
        }
    })
})

router.post('/search', (req, res) => {
    ToyModel.find({ name: new RegExp(req.body.name, "i") }, (err, data) => {
        if (!err) {
            res.render('admin/index', { toy: data })
        }
    })
})

router.get('/sort/asc', (req, res) => {
    ToyModel.find()
        .sort({ name: 1 })
        .exec((err, data) => {
            if (!err) {
                res.render('admin/index', { toy: data })
            }
        })
})

router.get('/sort/desc', (req, res) => {
    ToyModel.find()
        .sort({ name: -1 })
        .exec((err, data) => {
            if (!err) {
                res.render('admin/index', { toy: data })
            }
        })
})

module.exports = router;
