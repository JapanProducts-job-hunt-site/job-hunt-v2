/**
 * Created by KishikawaItaru on 2017/06/14.
 */
var express = require('express');
var router = express.Router();

var ctrlIndex = require("/index.js");
var ctrlMyPage = require("/public/static/myPage.js");

//index.htm　
router.post("/insert", ctrlIndex.register());
router.get("/getData", ctrlIndex.login());

