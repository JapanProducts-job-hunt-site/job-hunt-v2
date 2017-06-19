/**
 * Created by KishikawaItaru on 2017/06/14.
 */
var express = require('express');
var router = express.Router();

var ctrlIndex = require("../../../controller/ctrlIndex");
//var ctrlMyPage = require("/public/static/myPage");

//index.html
router.post("/insert", ctrlIndex.register);
router.get("/getData", ctrlIndex.login);

module.exports = router;