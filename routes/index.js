/**
 * Created by leslie on 2018/2/5.
 */
var express = require('express');
var router = express.Router();

router.get('/main',function(req,res){
    res.render("main");
    // res.send("main");
});

router.get('/main2',function(req,res){
    res.render("main2");
    // res.send("main");
});

module.exports = router;