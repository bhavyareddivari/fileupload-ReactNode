var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage }).single('resume');


router.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
        }
        res.json({
            success: true,
            message: 'Image uploaded!'
        });

        // Everything went fine
    })
});


module.exports = router;