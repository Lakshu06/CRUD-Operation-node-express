const NameD = require('../models/name');
const express = require('express');

const router = express.Router();


router.get('/name', (req, res) => {
    NameD.find({})
        .then(function (dbProducts) {
            res.json(dbProducts);
        })
        .catch(function (err) {
            res.json(err);
        })

});

router.post("/addname", (req, res) => {
    console.log(req)
    NameD.create(req.body).then(function (con) {
        console.log(con)
        res.send(con);
    });
});



router.delete('/delete/:id', function (req, res) {

    NameD.findByIdAndRemove({ _id: req.params.id }).then(function (name) {
        res.status(200).send(name)
    }).catch(function (err) {
        res.status(400).send(err)
    })
})



router.put('/update/:id', function (req, res) {

    NameD.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function (name) {

        res.send(name)
    })
})

module.exports = router;