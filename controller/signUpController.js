/**
 * Created by KishikawaItaru on 2017/06/20.
 */
/*
    このファイルでscopeを作って入れてやり取りさせるものを作る
 */

app.controller('signUpCtrl', function ($scope, $location, $rootScope, authentication)
{
    console.log("----------------------signUpController.js-------------------");
    $scope.submit = function ()
    {
        //THIS IS WHERE CHECK IF ACCOUNT EXISTS
        var user =
            {
                //<ng-model>: $scope.<scopeに使う名前>
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "email": $scope.email,
                "password": $scope.password
            };
    }
});//app.controller