/*
    このファイルでback endとfrontをくっつける
 */

//serviceを使うことによってpublic的なweb内でどこでも使えるfunctionになる
app.service('authentication', authentication);

authentication.$inject = ["$http"];
function authentication($http)
{
    register = function(userInfo)
    {
        return $http
        (
            {
                method:"POST",
                url: "http://localhost:4000/api/register",
                /*
                 $httpParamSerializerJQLike - a serializer inspired by jQuery's .param() (recommended)
                    Here u need to Serializes your data Beacause its a cross plat form for
                    this you need to add $httpSerializerJQLIKE

                 $httpParamSerializer - a serializer used by Angular itself for GET requests
                 */
                data: $httpParamSerializerJQLike(userInfo),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        )
    };

    login = function(userInfo)
    {
        return $http
        (
            {
                method: "GET",
                url: "http://localhost:4000/api/login",
                data: $httpParamSerializer(userInfo),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        )
    };

    return
    {
        //register: register,
        //login: login()
    }

}//authentication
