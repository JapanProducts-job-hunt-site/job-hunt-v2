/**
 * どうでも良い消してもいいファイル
 * テストで作ったファイルだから無視して
 */
var express = require('express');
var router = express.Router();

var ctrlIndex = require("/index.js");
var ctrlMyPage = require("/public/static/myPage.js");

//index.html
router.post("/insert", ctrlIndex.register());
router.get("/getData", ctrlIndex.login());

testChange