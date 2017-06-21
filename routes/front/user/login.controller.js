/**
 * Created by kaya on 6/20/2017.
 *
 *
 * --------Description------------
 * Treat login process of user side
 * data from index.html
 * call function caller and then do authentication
 */

app.controller('loginCtrl', function ($scope, $location, $rootScope, authentication) {
    //login submission process
    $scope.submit = function(){
        $rootScope.username = $scope.username;
        //define user with JSON
        var user = {
            "username" : $scope.username,
            "password" : $scope.password
        };

        authentication.login(user).error(function(err){
            //run here if api returns error status
            alert("user name or password is not correct");
        }).then(function(){
            //run here if user can login successfully
            $location.path("../../user/mypage.html");
        });






    };// end of $scope.submit


    
});