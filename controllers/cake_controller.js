// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.
//node depen
var exp = require('express');
var router = exp.Router();
var cake = require('../models/cakes.js');

//create routes
//index redirect
router.get('/', function (req, res) {
    res.redirect('index');
});

//index page
router.get('/index', function (req, res) {
    cake.selectAll(function (data) {
        var obj = { cake: data };
        res.render('index', obj);
    });
});

//create new cupcake
router.post('/cake/create', function (req, res) {
    cake.insertOne(req.body.cake_name, function () {
        res.redirect('/index');
    });
});

//eat cupcake
router.post('/cake/eat/:id', function (req, res) {
    cake.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

module.exports = router;