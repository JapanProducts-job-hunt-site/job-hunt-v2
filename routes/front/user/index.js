/**
 * Created by KishikawaItaru on 2017/06/16.
 */
/*
 -----------description-----------------------------
このファイルの中でtemmplateurlをして
どのページに飛ばしてあげるかを指定してあげる
 */
//define angular application
var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
app.config(function ($routeProvider)
{
    $routeProvider
        .when('/', {
            templateUrl: '../../../index.html'
        })
        .when('/myPage', {
           templateUrl: '../../user/myPage.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
